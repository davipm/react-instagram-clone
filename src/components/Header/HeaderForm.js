import React, { useRef, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";

function HeaderForm() {
  const [formVisible, setFormVisible] = useState(true);
  const [formSearch, setFormSearch] = useState('');
  const inputEl = useRef(null);

  const handleForm = () => {
    setFormVisible(false);
    inputEl.current.focus();
  };

  return (
    <div className="header__form">
      <input
        ref={inputEl}
        onBlur={() => {
          setFormVisible(true);
        }}
        onChange={event => setFormSearch(event.target.value)}
        value={formSearch}
        type="text"
        placeholder="Search"
        className="form-control"
      />

      <span className="search-icon">
        <FaSearch />
      </span>

      <span
        className="search-icon search-icon--right"
        tabIndex={0}
        onClick={() => {
          // TODO: clear input before show placeholder fake
        }}
      >
        <IoIosCloseCircle />
      </span>

      {formVisible && (
        <div className="form__fake" onClick={handleForm}>
          <FaSearch size={10} />
          <span>{formSearch ? formSearch : 'Busca'}</span>
        </div>
      )}
    </div>
  );
}

export default HeaderForm;



