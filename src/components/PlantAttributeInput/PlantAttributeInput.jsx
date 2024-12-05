import React, { useState } from "react";
import styles from "./PlantAttributeInput.module.css";

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
        <img src={iconSrc} />
        <div className={styles.edit}>
          <h3>{title}</h3>
          <img onClick={onButtonClick} className={styles.edit_img} src={isEditing ? "/assets/save.png" : "/assets/edit.png"} alt="edit" />
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
