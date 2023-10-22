import { FunctionComponent } from "react";
import "./Dashboard.css";
import React from "react";

const App: FunctionComponent = () => {
  return (
    <div className="dashboard">
      <div className="background-apartment">
        <img
          className="parisroom-night"
          alt=""
          src="/parisroom--night@2x.png"
        />
      </div>
      <div className="swatch" />
      <div className="swatch1" />
      <img className="image-1-icon" alt="" src="/image-1@2x.png" />
      <div className="swatch2" />
      <div className="dashboard-child" />
      <div className="percentage-meter">
        <div className="percentage-meter-child" />
        <div className="percentage-meter-item" />
        <img className="percentage-meter-inner" alt="" src="/line-30.svg" />
        <b className="b">80%</b>
      </div>
      <div className="search">
        <div className="background-box" />
        <div className="search1">
          <div className="vector-parent">
            <img className="vector-icon" alt="" src="/vector.svg" />
            <div className="frame-child" />
          </div>
          <div className="search-here"> Search here...</div>
        </div>
      </div>
      <div className="vuesaxoutlinearrow-down-parent">
        <img
          className="vuesaxoutlinearrow-down-icon"
          alt=""
          src="/vuesaxoutlinearrowdown.svg"
        />
        <div className="olisa-shameti-parent">
          <div className="olisa-shameti">Olisa Shameti</div>
          <div className="administrator">Administrator</div>
        </div>
        <div className="frame-item" />
        <img className="vector-icon1" alt="" src="/vector1.svg" />
      </div>
      <img
        className="vuesaxboldhome-2-icon"
        alt=""
        src="/vuesaxboldhome2.svg"
      />
      <div className="dashboard1">Dashboard</div>
      <b className="occupancy-rate">Occupancy Rate</b>
      <div className="segmented-control">
        <div className="button-11">
          <div className="div7" />
          <div className="div7">Occupied</div>
        </div>
        <div className="button-21">
          <div className="div8">􀈸</div>
          <div className="label6">175 apartments</div>
        </div>
      </div>
      <div className="segmented-control1">
        <div className="button-11">
          <div className="div7" />
          <div className="div7">Available</div>
        </div>
        <div className="button-21">
          <div className="div8">􀈸</div>
          <div className="label6">220 apartments</div>
        </div>
      </div>
      <div className="div11">80%</div>
      <div className="contract-overview-parent">
        <b className="contract-overview">Contract Overview</b>
        <img className="graph-icon" alt="" src="/graph.svg" />
      </div>
      <div className="maintainance-requests-wrapper">
        <b className="maintainance-requests-container">
          <span>{`Maintainance Requests ▾      `}</span>
          <span className="span">▼</span>
        </b>
      </div>
      <div className="quick-room-allocation-parent">
        <b className="quick-room-allocation">Quick Room Allocation</b>
        <img className="image-9-icon" alt="" src="/image-9@2x.png" />
        <div className="row-plain">
          <div className="edit-button6">
            <div className="edit-button7">
              <div className="div12">􀆅</div>
            </div>
          </div>
          <div className="image3">
            <img className="app-icons3" alt="" src="/app-icons2@2x.png" />
          </div>
          <div className="title3">Choose room</div>
          <div className="trailing-accessories3">
            <div className="disclosure3">→</div>
          </div>
          <div className="grabber6">
            <div className="grabber7">􀌇</div>
          </div>
        </div>
        <div className="row-plain1">
          <div className="edit-button6">
            <div className="edit-button7">
              <div className="div12">􀆅</div>
            </div>
          </div>
          <div className="image3">
            <img className="app-icons3" alt="" src="/app-icons2@2x.png" />
          </div>
          <div className="title3">Choose floor</div>
          <div className="trailing-accessories3">
            <div className="disclosure3">→</div>
          </div>
          <div className="grabber6">
            <div className="grabber7">􀌇</div>
          </div>
        </div>
        <div className="row-plain2">
          <img className="highlight-icon1" alt="" src="/highlight.svg" />
          <div className="edit-button6">
            <div className="edit-button7">
              <div className="div12">􀆅</div>
            </div>
          </div>
          <div className="image3">
            <img className="app-icons3" alt="" src="/app-icons2@2x.png" />
          </div>
          <div className="title3">Choose building</div>
          <div className="trailing-accessories3">
            <div className="disclosure3">→</div>
          </div>
          <div className="grabber6">
            <div className="grabber7">􀌇</div>
          </div>
        </div>
        <div className="button-text">
          <div className="label9">Allocate new room</div>
        </div>
      </div>
      <div className="toolbar-symbols-parent">
        <div className="toolbar-symbols">
          <div className="item-11">
            <div className="symbol6">􀓔</div>
          </div>
          <div className="item-21">
            <div className="symbol6">􀓔</div>
          </div>
          <div className="item-21">
            <div className="symbol6">􀓔</div>
          </div>
          <div className="item-21">
            <div className="symbol6">􀓔</div>
          </div>
          <div className="item-21">
            <div className="symbol6">􀓔</div>
          </div>
        </div>
        <img className="calendar-2-icon" alt="" src="/calendar2.svg" />
        <img
          className="vuesaxbolddocument-text-icon1"
          alt=""
          src="/vuesaxbolddocumenttext.svg"
        />
        <img className="people-icon" alt="" src="/people.svg" />
        <img className="wallet-icon" alt="" src="/wallet.svg" />
      </div>
      <div className="student-house-management-container">
        <p className="student-house">Student House</p>
        <p className="student-house">Management System</p>
      </div>
    </div>
  );
};

export default App;
