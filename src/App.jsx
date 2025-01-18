import { useState } from "react";
import teamLogo from "./impact-logo.png";
import otherTeamLogo from "./other-team-logo.png";
import StopWatchTimer from "./Timer";
import PossessionChart from "./PossessionChart";

function App() {
  const [count, setCount] = useState(0);
  const [shots, setShots] = useState(0);
  const [gameTime, setGameTime] = useState(0);
  const [events, setEvent] = useState([]);

  const createEvent = (event) => {
    setEvent([
      ...events,
      { id: Math.random(), type: event, value: 1, time: gameTime },
    ]);
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="flex pt-10 pb-5 justify-between">
          <div className="p-4">
            <div className="mx-auto flex justify-center">
              <img src={teamLogo} className="w-16 h-12" />
            </div>
            <div className="text-center">Georgia Impact</div>
          </div>
          <div className="flex text-4xl">
            <div>{count}</div>
            <div className="mx-4">-</div>
            <div>0</div>
          </div>
          <div className="p-4">
            <div className="mx-auto flex justify-center">
              <img src={otherTeamLogo} className="w-12 h-12" />
            </div>
            <div className="text-center">One Knoxville Youth Club</div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-md mx-auto">
        <div className="mb-5">
          <StopWatchTimer gameTime={gameTime} setGameTime={setGameTime} />
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <button
                className="w-64 rounded-lg border-lime-700 border-2 p-4"
                onClick={() => setCount(count + 1)}
              >
                Goal
              </button>
            </div>
            <div>
              <button className="w-64 rounded-lg border-lime-700 border-2 p-4">
                Assist
              </button>
            </div>
            <div>
              <button
                className="w-64 rounded-lg border-lime-700 border-2 p-4"
                onClick={() => createEvent("shot on target")}
              >
                Shot On Target
              </button>
            </div>
            <div>
              <button
                className="w-64 rounded-lg border-lime-700 border-2 p-4"
                onClick={() => createEvent("shot")}
              >
                Shot
              </button>
            </div>
            <div>
              <button
                className="w-64 rounded-lg border-lime-700 border-2 p-4"
                onClick={() => createEvent("save")}
              >
                Save
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <table className="w-full text-center">
            <tbody>
              <tr>
                <th>
                  <div className="mx-auto flex justify-center">
                    <img src={teamLogo} className="w-10 h-8" />
                  </div>
                </th>
                <th>Team Stats</th>
                <th>
                  <div className="mx-auto flex justify-center">
                    <img src={otherTeamLogo} className="w-10 h-8" />
                  </div>
                </th>
              </tr>
              <tr>
                <td>{shots}</td>
                <td>Shots</td>
                <td>1</td>
              </tr>
              <tr>
                <td>{shots}</td>
                <td>Shots On Target</td>
                <td>1</td>
              </tr>
              <tr>
                <td>
                  {Intl.NumberFormat("en", {
                    maximumFractionDigits: 2,
                  }).format(90 * (shots / 100))}
                  %
                </td>
                <td>Possession</td>
                <td>1%</td>
              </tr>
              <tr>
                <td>{shots}</td>
                <td>Saves</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <div className="h-96 flex">
          <PossessionChart />
        </div> */}
        <div>
          <ul>
            <li>Something here</li>
            {events.map((event) => (
              <li key={event.id}>
                {event.type} {event.time}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
