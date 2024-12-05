import React from "react";
import { useState, useEffect } from "react";
import { plantsListResponse } from "../../api/mocks/plantsListResponse";
import { apiKey } from "../../config";
import { useDebounce } from "use-debounce";
import { Search } from "../../components/Search/Search";
import { Navigation } from "../../components/Navigation/Navigation";
import styles from "../../pages/PlantListPage/PlantListPage.module.css";
import { Footer } from "../../components/Footer/Footer";
import { PlantCard } from "../../components/PlantCard/PlantCard";
import { Logo } from "../../components/Logo/Logo";
import { ColorRing } from "react-loader-spinner";
import { NextPage } from "../../components/NextPage/NextPage";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export const PlantListPage = () => {
  const [plants, setPlants] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [debouncedSearch] = useDebounce(searchValue, 650);
  const params = useParams();
  const navigate = useNavigate();
  const initialPage = params.page || 0;
  const [currentPage, setCurrentPage] = useState(initialPage);

  const previousPage = currentPage - 1;
  const nextPage = currentPage + 1;

  useEffect(() => {
    const params = new URLSearchParams({
      key: apiKey,
      page: currentPage,
      q: debouncedSearch,
    }).toString();
    setPlants(plantsListResponse.data);
    // fetch(`https://perenual.com/api/species-list?${params}`)
    //   .then(res => {
    //     return res.json();
    //   })
    //   .then(res => {
    //     setPlants(res.data);
    //   })
    //   .catch(err => {
    //     // Todo error handling
    //     console.log(err);
    //   });
  }, [debouncedSearch, currentPage]);

  if (!plants) {
    return (
      <div className={styles.loading}>
        <ColorRing
          visible={true}
          height="120"
          width="120"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={["#849b87", "#849b87", "#849b87", "#849b87", "#849b87"]}
        />
      </div>
    );
  }

  const goToPage = pageNumber => {
    setCurrentPage(pageNumber);
    navigate(`/search/${pageNumber}`);
  };

  return (
    <div className={styles.container}>
      <section className={styles.nav}>
        <Logo />
        <Search onChange={event => setSearchValue(event.currentTarget.value)} />
        <Navigation />
      </section>
      <div className={styles.banner}></div>
      <section className={styles.plants_list}>
        <ul>
          {plants
            .filter(plant => {
              return plant.default_image;
            })
            .map(plant => {
              return <PlantCard link={`/plant/${plant.id}`} plant={plant} key={plant.id} />;
            })}
        </ul>
      </section>
      <div className={styles.next_pages}>
        {previousPage >= 0 && <NextPage pageChart={"<"} onClick={() => goToPage(previousPage)} />}
        <NextPage pageChart={currentPage} onClick={() => {}} />
        <NextPage pageChart={`>`} onClick={() => goToPage(nextPage)} />
      </div>
      <Footer />
    </div>
  );
};
