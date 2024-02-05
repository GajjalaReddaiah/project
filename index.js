const fs = require('fs');
const csv = require('csvtojson');

// Import core logic functions for each problem
const problem1 = require('./src/sever/match_per_year_for_all_the_years');
const problem2 = require('./src/sever/matches_won_per_team_per_year');
const problem3 = require('./src/sever/extra_runs_conceded_per_team');
const problem4 = require('./src/sever/economical_bowlers_in_the_year_2015');
const problem5 = require('./src/sever/team_won_the_toss');
const problem6 = require('./src/sever/Player_of_the_Match_awards');
const problem7 = require('./src/sever/strike_rateof_a_batsman');
const problem8 = require('./src/sever/dismissed_by_another_player');
const problem9 = require('./src/sever/best_economy_in_super_overs');
function main() {
	// Define file paths for data
	const matchesDataPath = '/home/reddaiah/ipl_project/src/data/matches.csv';
	const deliveriesDatapath = '/home/reddaiah/ipl_project/src/data/deliveries.csv';
	// Define an array of problem numbers to execute
	const problemsToExecute = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	problemsToExecute.forEach((problemNumber) => {
		const outputFilePath = `/home/reddaiah/ipl_project/src/public/output${problemNumber}.json`;

		if (problemNumber === 1) {
			const matchesData = csv().fromFile(matchesDataPath);

			matchesData.then((data) => {
				const result = problem1.match_per_year_for_all_the_years(data);
				writeResultToFile(outputFilePath, result);
			});
		} else if (problemNumber === 2) {
			const matchesData = csv().fromFile(matchesDataPath);

			Promise.all([matchesData]).then(([matches]) => {
				const result = problem2.matches_won_per_team_per_year(matches);
				writeResultToFile(outputFilePath, result);
			});
		} else if (problemNumber === 3) {
			const matchesData = csv().fromFile(matchesDataPath);
			const deliveriesData = csv().fromFile(deliveriesDatapath);

			Promise.all([matchesData, deliveriesData]).then(
				([matches, deliveries]) => {
					const result = problem3.calculateExtraRunsConcededIn2016(
						matches,
						deliveries,
					);
					writeResultToFile(outputFilePath, result);
				},
			);
		} else if (problemNumber === 4) {
			const matchesData = csv().fromFile(matchesDataPath);
			const deliveriesData = csv().fromFile(deliveriesDatapath);

			Promise.all([matchesData, deliveriesData]).then(
				([matches, deliveries]) => {
					const result = problem4.economical_bowlers_in_the_year_2015(
						matches,
						deliveries,
					);
					writeResultToFile(outputFilePath, result);
				},
			);
		} else if (problemNumber === 5) {
			const matchesData = csv().fromFile(matchesDataPath);
			Promise.all([matchesData]).then(([matches]) => {
				const result = problem5.team_won_the_toss(matches);
				writeResultToFile(outputFilePath, result);
			});
		} else if (problemNumber === 6) {
			const matchesData = csv().fromFile(matchesDataPath);
			Promise.all([matchesData]).then(([matches]) => {
				const result = problem6.Player_of_the_Match_awards(matches);
				writeResultToFile(outputFilePath, result);
			});
		} else if (problemNumber === 7) {
			const matchesData = csv().fromFile(matchesDataPath);
			const deliveriesData = csv().fromFile(deliveriesDatapath);

			Promise.all([matchesData, deliveriesData]).then(
				([matches, deliveries]) => {
					const result = problem7.strike_rateof_a_batsman(
						matches,
						deliveries,
					);
					writeResultToFile(outputFilePath, result);
				},
			);
		} else if (problemNumber === 8) {
			const deliveriesData = csv().fromFile(deliveriesDatapath);

			Promise.all([deliveriesData]).then(([deliveries]) => {
				const result = problem8.dismissed_by_another_player(deliveries);
				writeResultToFile(outputFilePath, result);
			});
		} else if (problemNumber === 9) {
			const deliveriesData = csv().fromFile(deliveriesDatapath);

			Promise.all([deliveriesData]).then(([deliveries]) => {
				const result = problem9.best_economy_in_super_overs(deliveries);
				writeResultToFile(outputFilePath, result);
			});
		}
	});
}

function writeResultToFile(outputFilePath, result) {
	fs.writeFileSync(outputFilePath, JSON.stringify(result, null, 2));
	console.log(`Problem result written to ${outputFilePath}`);
}

main();