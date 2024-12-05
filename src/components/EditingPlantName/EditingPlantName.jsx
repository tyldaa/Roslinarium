import React, { useState } from "react";
import styles from "../EditingPlantName/EditingPlantName.module.css";

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
        <img onClick={onButtonClick} src={isEditing ? "/assets/save.png" : "/assets/edit.png"} alt="edit" />
      </div>
      {initialValue && <div className={styles.oldNamePlant}>{plantName}</div>}
    </>
  );
};
