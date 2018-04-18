
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('blogposts').del()
    .then(function () {
      // Inserts seed entries
      return knex('blogposts').insert([
        {title: 'Do I dare to eat a peach?', content: 'Baltimore chop grounder reliever foul line ejection wrigley scorecard. Mitt golden sombrero golden sombrero league fair starting pitcher range win. Left field base on balls club error moneyball, scorecard no-hitter breaking ball wrigley. On deck batting average lineup squeeze bench good eye first base defensive indifference. Grounder league outfield foul line robbed dodgers pennant. Appeal no-hitter gapper hit by pitch balk mitt pinch hit rubber game gold glove.'},
        {title: 'Do I presume to eat a Scotch egg?', content: '4-bagger butcher boy game run batted in crooked number retire cork left field dribbler. Rhubarb save check swing inside tapper grounder yankees bag. Cy young streak gapper baseball card pennant, sabremetrics shift off-speed. Double play win good eye bench ball hitter triple play foul pole. Bench southpaw walk off alley off-speed arm retire doubleheader. Baseball baltimore chop all-star knuckleball helmet mound pinch runner.'},
        {title: 'Do I want to eat an oyster?', content: 'Unearned run hit by pitch 1-2-3 error rubber foul line extra innings glove gap. No-hitter cheese triple play robbed second baseman gap crooked number designated hitter slide. Series force baltimore chop home wild pitch knuckleball cork center fielder bases loaded. 1-2-3 mitt rubber game fenway bullpen right fielder first base helmet. Pull ball butcher boy contact 1-2-3 shortstop in the hole. Out hitter glove base on balls win, interleague reliever.'}
      ]);
    });
};
