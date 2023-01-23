import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
function MyApp() {
  return (
    <div>
      <p>radhouane ben</p>
      <Document
        file="/0410100.pdf"
        onLoadSuccess={() => {
          console.log("loaded success");
        }}
      >
        <Page height="600" pageNumber={1} />
      </Document>
    </div>
  );
}

export default MyApp;
