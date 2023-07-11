import TODO from "../images/icon-todo.svg";
import CALENDAR from "../images/icon-calendar.svg";
import REMINDER from "../images/icon-reminders.svg";
import PLANNING from "../images/icon-planning.svg";
const Dropdown = () => {
  return (
    <div>
      <div className="dropdown">
        <ul>
          <li>
            <img src={TODO} />
            <a href="">Todo List</a>
          </li>
          <li>
            <img src={CALENDAR} />
            <a href="">Calender</a>
          </li>
          <li>
            <img src={REMINDER} />
            <a href="">Reminder</a>
          </li>
          <li>
            <img src={PLANNING} />
            <a href="">Planning</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
