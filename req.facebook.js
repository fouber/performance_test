var https = require('https');

https.get({
    hostname: 'm.facebook.com',
    port: 443,
    headers: {
        'cookie': 'datr=1Ak6VSbOJXhWV7em-lImu-ci; a11y=%7B%22sr%22%3A0%2C%22sr-ts%22%3A1442827622835%2C%22jk%22%3A0%2C%22jk-ts%22%3A1442827622835%2C%22kb%22%3A2%2C%22kb-ts%22%3A1442827622835%2C%22hcm%22%3A0%2C%22hcm-ts%22%3A1442827622835%7D; locale=en_US; lu=ghtW3oKruHtSB4J8borHbY7A; p=-2; presence=EDvF3EtimeF1442827721EuserFA21375556840A2EstateFDutF1442827721147EatF1442827715072Et2F_5b_5dElm2FnullEuct2F1442827111BEtrFnullEtwF3748801036Esb2F0CEchFDp_5f1375556840F0CC; m_pixel_ratio=2; wd=375x667; x-referer=%2Fhome.php%3F_rdr%23%2F%3F_rdr; c_user=1375556840; fr=03x6PNbqO5R4YMOab.AWUUTTR_w8ot3EGottuMpNtj7mM.BVOgnw.vR.FX_.0.AWUl9_Yx; xs=218%3ANBrfzmApnYKDzA%3A2%3A1442827711%3A4299; csm=2; s=Aa55Zt4xAN7BzpC9.BV_82_',
        'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.3 (KHTML, like Gecko) Version/8.0 Mobile/12A4345d Safari/600.1.4'
    }
}, require('./log.js'));