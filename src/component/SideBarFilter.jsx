import React from "react";

const SideBarFilter = () => {
  return (
    <div className="row border  m-2">
      <div className=" my-3">
        <label htmlFor="">Category</label>
        <select name="" id="" className="form-select">
          <option value="Category">Category</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Women">Children</option>
          <option value="Women">Electronic</option>
          <option value="Women">Beauty</option>
          <option value="Women">Mobile</option>
          <option value="Women">TV</option>
        </select>
      </div>
      <div className=" my-3">
        <label htmlFor="">Sub-Category</label>
        <select name="" id="" className="form-select">
          <option value="Category">Sub-Category</option>
          <option value="Men">Jeans</option>
          <option value="Women">Top</option>
          <option value="Women">Pant</option>
          <option value="Women">Shirt</option>
          <option value="Women">Lehnga</option>
          <option value="Women">Capri</option>
          <option value="Women">Summer Wear</option>
        </select>
      </div>
      <div className=" my-3">
        <label htmlFor="vol" className="range-field">
          Price Range:-
        </label>
        <br />
        <input
          type="range"
          className="w-100"
          id="vol  #myinput"
          name="vol"
          min="0"
          max="1000"
          step="50"
        />
      </div>
      <div className="my-3">
        <h6 htmlFor="">Filter By Brand</h6>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="Denim" />
          <label className="form-check-label" htmlFor="Denim">
            Denim
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="HRX"
            id="HRX"
          />
          <label className="form-check-label" htmlFor="HRX">
            HRX
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="Allon Solly"
            id="Allon"
          />
          <label className="form-check-label" htmlFor="Allon">
            Allon Solly
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="Puma"
            id="Puma"
          />
          <label className="form-check-label" htmlFor="Puma">
            Puma
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="Reymond"
            id="Reymond"
          />
          <label className="form-check-label" htmlFor="Reymond">
            Reymond
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="Zara"
            id="Zara"
          />
          <label className="Zara" htmlFor="Zara">
            Zara
          </label>
        </div>
      </div>
    </div>
  );
};

export default SideBarFilter;
