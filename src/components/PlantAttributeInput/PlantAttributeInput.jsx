import React, { useState } from "react";
import styles from "./PlantAttributeInput.module.css";

const BASE_URL = import.meta.env.BASE_URL;

export const PlantAttributeInput = ({ onSave, iconSrc, title, editingPlaceholder, initialValue = "" }) => {
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
    <div className={styles.content}>
      <div className={styles.editing_element}>
        <div className={styles.inputIcon} style={{ backgroundImage: `url(${BASE_URL}${iconSrc})` }} />
        <div className={styles.edit}>
          <h3>{title}</h3>
          <div
            onClick={onButtonClick}
            className={styles.edit_img}
            style={{ backgroundImage: `url(${BASE_URL}${isEditing ? "assets/save.png" : "assets/edit.png"})` }}
          />
        </div>
      </div>
      <input
        onChange={onValueChange}
        value={value}
        className={styles.edit_input}
        disabled={!isEditing}
        type="text"
        placeholder={editingPlaceholder}
        style={isEditing ? { borderBottom: "1px solid #000" } : { border: "1px solid transparent" }}
      />
    </div>
  );
};
