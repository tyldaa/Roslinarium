import React, { useState } from "react";
import styles from "./DatePlantAttributeInput.module.css";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

const dateRegex = /\d{1,2}\.\d{1,2}.\d{4}/;

export const DatePlantAttributeInput = ({ onSave, iconSrc, title, editingPlaceholder, initialValue = "" }) => {
  const [isEditing, setEditing] = useState(false);
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(false);

  const onButtonClick = () => {
    if (isEditing) {
      if (validateDate()) {
        onSave(value);
        setEditing(prevState => !prevState);
      }
    } else {
      setEditing(prevState => !prevState);
    }
  };

  const onValueChange = e => {
    setError(false);
    setValue(e.currentTarget.value);
  };

  const validateDate = () => {
    const isValidFormat = dateRegex.test(value);
    const isValidDate = dayjs(value, "D.M.YYYY", true).isValid();

    if (!isValidDate || !isValidFormat) {
      setError(true);
      return false;
    }

    return true;
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
      {error && <div className={styles.error_text}>Wrong date format used</div>}
    </div>
  );
};
