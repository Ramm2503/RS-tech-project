import React, { useState } from 'react';
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';
import Page4 from './page4';
import Page5 from './page5';
import Page6 from './page6';
import Page7 from './page7';
import './Main.css';
import './Sidebar.css';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const goTo = (page) => setCurrentPage(page < 1 ? 7 : (page > 7 ? 1 : page));

  return (
    <div>
      <div className="sidebar">
        <ul>
          <li>Dashboard</li>
          <li className="selected">Employee</li>
          <li>Calendar</li>
          <li>Messages</li>
        </ul>
      </div>
      {currentPage === 1 && <Page1 goTo={goTo} currentPage={currentPage} />}
      {currentPage === 2 && <Page2 goTo={goTo} currentPage={currentPage} />}
      {currentPage === 3 && <Page3 goTo={goTo} currentPage={currentPage} />}
      {currentPage === 4 && <Page4 goTo={goTo} currentPage={currentPage} />}
      {currentPage === 5 && <Page5 goTo={goTo} currentPage={currentPage} />}
      {currentPage === 6 && <Page6 goTo={goTo} currentPage={currentPage} />}
      {currentPage === 7 && <Page7 goTo={goTo} currentPage={currentPage} />}
    </div>
  );
}
export default App;
