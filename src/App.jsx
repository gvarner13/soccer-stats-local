import { useState } from "react";
import teamLogo from "./impact-logo.png";
import otherTeamLogo from "./other-team-logo.png";

function App() {
  const [count, setCount] = useState(0);
  const [shots, setShots] = useState(0);

  return (
    <>
      <div className="flex justify-center">
        <div className="flex p-10 justify-between">
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
      <div className="max-w-screen-lg mx-auto">
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
              <button className="w-64 rounded-lg border-lime-700 border-2 p-4">
                Shot On Target
              </button>
            </div>
            <div>
              <button
                className="w-64 rounded-lg border-lime-700 border-2 p-4"
                onClick={() => setShots(shots + 1)}
              >
                Shot
              </button>
            </div>
            <div>
              <button className="w-64 rounded-lg border-lime-700 border-2 p-4">
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
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
