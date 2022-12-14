import React, { useContext } from "react";

import styles from "./marketReport.module.scss";

import AnalyzeFilter from "../../organisms/AnalyzeFilter/AnalyzeFilter";
import ScrollBottom from "../../molecules/ScrollButton/ScrollBottom";
import Summary from "../../molecules/Summary/Summary";
import CompareReport from "../../organisms/CompareReport/CompareReport";
import CompareMenu from "../../molecules/CompareMenu/CompareMenu";
import MasterComponent from "../MasterComponent/MasterComponent";
import GraphOfReport from "../../organisms/GraphOfReport/GraphOfReport";
import { Context } from "../../../storage/Context";

export default function MarketReport() {
  const context = useContext(Context);
  return (
    <>
      <MasterComponent
        title="Piyasa Raporu"
        color="#f2ce16"
        classBg={styles.bgImage}
      >
        <Summary
          title="Nedir ?"
          text="Üniversite lisans mezunlarının işgücü piyasası performanslarını “bölüm
          bazında” değerlendiren Üni-Veri, başta üniversite tercihi yapacak
          öğrenciler olmak üzere eğitimi devam eden gençlerin ve
          profesyonellerin doğrudan yararlanabileceği ulusal bir araştırmadır."
          classContent={styles.classContent}
          classTitle={styles.title}
        />
        <ScrollBottom />
      </MasterComponent>
      <CompareReport>
        <CompareMenu />
        <div className={styles.flexCenter}>
          <img
            className={styles.img}
            src="/analyze.jpg"
            alt="bölüm karşılaştırma"
          />
          <AnalyzeFilter />
        </div>
        <GraphOfReport
          data={context.reports.data[context.selectedDepartments.first]}
        />
      </CompareReport>
    </>
  );
}
