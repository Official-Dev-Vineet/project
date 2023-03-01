const App = () => {
  return (
    <div className="container">
      <Nav />
      <MainContent />
    </div>
  );
};

// navbar
const Nav = () => {
  return (
    <nav>
      <div className="logo">Excel</div>
      <ul className="menu">
        <li>New</li>
        <li>Open</li>
        <li>Save</li>
        <li>Close</li>
      </ul>
    </nav>
  );
};
const MainContent = () => {
  const [dataReportMsg, setDataReportMsg] = React.useState(
    "Data sheet Ready to Data Post"
  );
  React.useEffect(() => {
    const data = () => {
      const allInput = document.querySelectorAll("input");
      allInput.forEach((element) => {
        element.addEventListener("input",async() => {
          setDataReportMsg("data inserting...");
        });
        const timer = setTimeout(() => {
          setDataReportMsg("Data sheet Ready to Data Post");
        }, 2000);
        return () => {
          clearTimeout(timer);
        };
      });
    };
    data();
  });
  const date = new Date();
  const tableData = [
    "Onboarding Call",
    "Google Search Console Access",
    "Google Analytics Access",
    "Website Access",
    "Technical Audit",
    "Anchor Text And Semantic Analytics",
    "Computer Analytics",
    "Anchor Text/URL Mapping",
    "Google Data Studio Report + Local Reporting Suite",
    "Site Level Optimization",
    "On Page Optimization",
    "Content Creation",
    "Content Publishing",
    "Premium Press Release",
    "Authority Niche Placement",
    "Review Management",
    "Index Links",
    "Video Recap",
  ];
  const monthDetails = (date) => {
    return date.getMonth();
  };
  return (
    <main>
      <table className="data-table">
        <thead>
          <tr>
            <th>MONTH {monthDetails(date)}</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => {
            return (
              <tr
                key={index}
                id={Math.floor(Math.random() * 0xffffff)
                  .toString(16)
                  .padEnd(6, "o")}
              >
                <td>{data}</td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan={6}>{dataReportMsg}</th>
          </tr>
        </tfoot>
      </table>
    </main>
  );
};
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
