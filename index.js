
function checkSalaryTotal(lineup) {
  const combinedSalaryCap = 45000
  const combinedSalary = lineup.map((lineup) => lineup.salary).reduce((total, salary) => total + salary, 0)

  return (combinedSalaryCap > combinedSalary)
}

function checkTeams(lineup) {
  const teams = lineup.map((lineup) => lineup.teamId)
  const sortedTeams = teams.sort((a, b) => a - b)
  let currentCount = 1
  let highestSteak = 1

  for (let i = 0; i < sortedTeams.length; i++) {
    if (sortedTeams[i] === sortedTeams[i + 1]) {
      currentCount++
    } else {
      currentCount = 1
    }
    if (currentCount > highestSteak) {
      highestSteak = currentCount
    }
  }

  return highestSteak <= 2
}

function checkGames(lineup) {
  const games = lineup.map((lineup) => lineup.gameId)
  const sortedGames = games.sort((a, b) => a - b)
  let currentCount = 1
  let highestSteak = 1

  for (let i = 0; i < sortedGames.length; i++) {
    if (sortedGames[i] === sortedGames[i + 1]) {
      currentCount++
    } else {
      currentCount = 1
    }
    if (currentCount > highestSteak) {
      highestSteak = currentCount
    }
  }

  return highestSteak <= 3
}

function checkPositions(lineup) {
  const properPositionLineup = ['C', 'OF', 'OF', 'OF', 'P', 'SS', '1B', '2B', '3B']
  const positions = lineup.map((lineup) => lineup.position)

  let positionCheck = positions.every(element => properPositionLineup.indexOf(element) > -1)

  return positionCheck
}

function checkNumberPlayers(lineup) {
  const players = lineup.map((lineup) => lineup.name)

  return players.length === 9
}


const validateLineUp = (lineup) => {
  return checkPositions(lineup) && checkGames(lineup) && checkTeams(lineup) && checkSalaryTotal(lineup) && checkNumberPlayers(lineup)
}

module.exports = validateLineUp
