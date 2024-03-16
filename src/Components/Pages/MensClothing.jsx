import React from "react";
import Card from "../Modal/Card";
import productItems from "../../mockData/ProductiItems";
import Dropdown from "../Modal/Dropdown";
import Breadcrumb from "../Modal/Breadcrumb";

function MensClothing() {
  return (
    <>
      <section className="main-section">
        <div className="container">
          <div className="page-heading">
            <Breadcrumb/>
            <h1>
              Men Clothing <span>3662</span>
            </h1>
          </div>
          <div className="filter-cloths">
          <div className="row">
            <div className="col-md-3">
              <div className="filtersHeading">
                <h6>Filters</h6>
                <Dropdown/>
              </div>
            </div>
            <div className="col-md-9">
              <div className="sort-by">
              <p className="m-0">Sort By</p>
              <Dropdown/>
              </div>
              <div className="row">
                {productItems.map((data) => {
                  return (
                    <div className="col-md-4 mensclothing">
                      <Card data={data} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MensClothing;
