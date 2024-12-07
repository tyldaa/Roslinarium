import React, { useState } from "react";
import styles from "../EditingPlantName/EditingPlantName.module.css";

const BASE_URL = import.meta.env.BASE_URL;

export const EditingPlantName = ({ plantName, onSave, initialValue = "" }) => {
  const [isEditing, setEditing] = useState(false);
  const [value, setValue] = useState(initialValue);

  const onButtonClick = () => {
    setEditing(prevState => !prevState);

    if (isEditing) {
      onSave(value);
    }
  };

  const onValueChange = e => {
    setValue(e.currentTarget.value);
  };

  return (
    <>
      <div className={styles.edit}>
        <input
          onChange={onValueChange}
          value={value}
          className={styles.plant_name}
          disabled={!isEditing}
          type="text"
          placeholder={plantName}
          style={isEditing ? { borderBottom: "1px solid #000" } : { border: "1px solid transparent" }}
        />
        <div
          onClick={onButtonClick}
          className={styles.edit_img}
          style={{ backgroundImage: `url(${BASE_URL}${isEditing ? "assets/save.png" : "assets/edit.png"})` }}
        />
      </div>
      {initialValue && <div className={styles.oldNamePlant}>{plantName}</div>}
    </>
  );
};
