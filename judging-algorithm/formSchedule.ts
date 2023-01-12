
// hardcode based on hackathon needs
let allTimes: string[] = ['10:00', '10:15', '10:30', '10:45', '11:00', '11:15', '11:30', '11:45'];

// obtained by CSV parsing
const allJudgingRooms: Room[] = [];
let unassignedTeams: HackerTeam[] = [];
let unassignedJudges: HackerTeam[] = [];

// driver code, takes parsed values and creates random assignments 
function sortJudgesAndPeople(allTimes: string[], allJudgingRooms: Room[], unassignedTeams: HackerTeam[], unassignedJudges: Judge[]) {

  // judges assignment
  judgesPerRoom: int = unassignedJudges.length() / allJudgingRooms.length();
  roomIdx: int = -1;
  while (unassignedJudges.length > 0) {
    roomIdx++;
    judgesInCurRoom: int = 0;
    while (judgesInCurRoom < judgesPerRoom) {
      judgeToAssignIdx = Math.floor(Math.random() * unassignedJudges.length() + 1);
      judgeToAssign = unassignedJudges.pop(judgeToAssignIdx);
      judgesInCurRoom++;

      assignJudgeToRoom(judgeToAssign, roomIdx);
    }
  }

  // people assignment
  while (unassignedTeams.length > 0) {
    timeSlot = getNextTime();
    availableRooms = this.deepArrayCopy(allJudgingRooms);
    while (availableRooms.length() > 0 && unassignedTeams.length() > 0) {
      teamToAssignIdx = Math.floor(Math.random() * unassignedTeams.length() + 1);
      teamToAssign = unassignedTeams.pop(teamToAssignIdx);

      roomToAssignToIdx = Math.floor(Math.random() * availableRooms.length() + 1);
      roomToAssignTo = availableRooms.pop(roomToAssignToIdx);

      assignTeamToTime(timeSlot, teamsToAssign, roomToAssignTo);
    }
  }
}

getNextTime() {
  return allTimes.pop();
}

assignTeamToTime(timeSlot: string, teamToAssign: Team, roomToAssignTo: Room) {

}

assignJudgeToRoom(timeSlot: string, teamsToAssign, roomToAssignTo) {

}


