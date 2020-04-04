



function checkSalaryTotal(lineup) {
  const combinedSalaryCap = 45000
  const combinedSalary = lineup.map((lineup) => lineup.salary).reduce((total, salary) => total + salary, 0)

  if (combinedSalaryCap > combinedSalary) {
    return true
  } else {
    return false
  }
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
  if (highestSteak <= 2) {
    return true
  } else {
    return false
  }
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
  if (highestSteak <= 3) {
    return true
  } else {
    return false
  }
}

function checkPositions(lineup) {
  const properPositionLineup = ['C', 'OF', 'OF', 'OF', 'P', 'SS', '1B', '2B', '3B']
  const positions = lineup.map((lineup) => lineup.position)

  let positionCheck = positions.every(element => properPositionLineup.indexOf(element) > -1)

  return positionCheck
}

function checkNumberPlayers(lineup) {
  const players = lineup.map((lineup) => lineup.name)

  if (players.length === 9) {
    return true
  } else {
    return false
  }
}


const validateLineUp = (lineup) => {
  const positions = checkPositions(lineup)
  const games = checkGames(lineup)
  const teams = checkTeams(lineup)
  const salaryTotal = checkSalaryTotal(lineup)
  const numPlayers = checkNumberPlayers(lineup)

  if (positions === true && games === true && teams === true && salaryTotal === true && numPlayers === true) {
    return true
  } else {
    return false
  }
}

module.exports = validateLineUp
