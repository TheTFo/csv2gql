import { importCsv } from './importCsv';

test('that it throws an error if csvFile does not exist', async () => {
  await expect(importCsv({
    csvFile: 'non-existent.csv',
    graphqlUri: 'http://notreal.uri'
  })).rejects.toThrow(/^Could not access 'non-existent.csv'/s);
});

test('that dumps the contents of the file to stdout when dryRun enabled', async () => {
  let consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});    
  await importCsv({
    csvFile: './test-assets/presidential_national_toplines_2020_single.csv',
    graphqlUri: 'http://notreal.uri',
    dryRun: true
  });

  expect(console.log).toHaveBeenCalledTimes(1)
  expect(consoleSpy.mock.calls[0][0]).toStrictEqual([{
    "branch": "President",
    "candidate_3rd": "",
    "candidate_chal": "Biden",
    "candidate_inc": "Trump",
    "cycle": "2020",
    "ec_nomajority": "0.0045",
    "ecwin_3rd": "",
    "ecwin_chal": "0.6824",
    "ecwin_inc": "0.3131",
    "ev_3rd": "",
    "ev_3rd_hi": "",
    "ev_3rd_lo": "",
    "ev_chal": "315.6932",
    "ev_chal_hi": "427",
    "ev_chal_lo": "201",
    "ev_inc": "222.3068",
    "ev_inc_hi": "337",
    "ev_inc_lo": "111",
    "model": "polls-plus",
    "modeldate": "8/31/2020",
    "nat_voteshare_other": "1.35622",
    "nat_voteshare_other_hi": "2.079338",
    "nat_voteshare_other_lo": "0.7234035",
    "national_voteshare_3rd": "",
    "national_voteshare_3rd_hi": "",
    "national_voteshare_3rd_lo": "",
    "national_voteshare_chal": "52.32399",
    "national_voteshare_chal_hi": "56.8336",
    "national_voteshare_chal_lo": "47.8178",
    "national_voteshare_inc": "46.31979",
    "national_voteshare_inc_hi": "50.80128",
    "national_voteshare_inc_lo": "41.81928",
    "popwin_3rd": "",
    "popwin_chal": "0.808075",
    "popwin_inc": "0.191925",
    "simulations": "40000",
    "timestamp": "8/31/2020 12:23"
  }]);
});
