const userAgents = [
    "Mozilla/5.0 (iPhone; CPU iPhone13,4 OS 17_2 like Mac OS X) AppleWebKit/605.1.17 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone14,4 OS 17_3_1 like Mac OS X) AppleWebKit/605.1.19 (KHTML, like Gecko) FxiOS/20.0 Mobile/15E148 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone12,5 OS 17_2 like Mac OS X) AppleWebKit/605.1.18 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone14,6 OS 17_4 like Mac OS X) AppleWebKit/605.1.18 (KHTML, like Gecko) DuckDuckGo/8 Mobile/15E148 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone12,1 OS 17_3 like Mac OS X) AppleWebKit/605.1.17 (KHTML, like Gecko) FxiOS/26.0 Mobile/15E148 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone14,6 OS 17_1 like Mac OS X) AppleWebKit/605.1.19 (KHTML, like Gecko) DuckDuckGo/10 Mobile/15E148 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone12,5 OS 17_3_1 like Mac OS X) AppleWebKit/605.1.17 (KHTML, like Gecko) EdgiOS/110.0.1485.96 Mobile/15E148 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone14,6 OS 17_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone12,1 OS 17_2 like Mac OS X) AppleWebKit/605.1.17 (KHTML, like Gecko) DuckDuckGo/7 Mobile/15E148 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone14,7 OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) OPT/2.4.0",
    "Mozilla/5.0 (iPhone; CPU iPhone13,1 OS 17_1 like Mac OS X) AppleWebKit/605.1.16 (KHTML, like Gecko) OPR/79.0.3335.181298",
    "Mozilla/5.0 (iPhone; CPU iPhone14,2 OS 17_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) OPR/70.0.3358.156323",
    "Mozilla/5.0 (iPhone; CPU iPhone14,5 OS 17_3_1 like Mac OS X) AppleWebKit/605.1.17 (KHTML, like Gecko) DuckDuckGo/8 Mobile/15E148 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone14,5 OS 17_1 like Mac OS X) AppleWebKit/605.1.17 (KHTML, like Gecko) FxiOS/35.0 Mobile/15E148 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone12,5 OS 17_2_1 like Mac OS X) AppleWebKit/605.1.20 (KHTML, like Gecko) OPR/79.0.3399.184395",
    "Mozilla/5.0 (Linux; Android 14.0; OnePlus 10 Pro) AppleWebKit/540.31 (KHTML, like Gecko) Chrome/108.0.4373.110 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 11.0; SM-S908B) AppleWebKit/544.37 (KHTML, like Gecko) Chrome/107.0.4008.99 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 11.0; OnePlus 11) AppleWebKit/594.38 (KHTML, like Gecko) SamsungBrowser/15.0",
    "Mozilla/5.0 (Linux; Android 12.0; M2102J20SG) AppleWebKit/599.38 (KHTML, like Gecko) UCBrowser/14.4.0.1135",
    "Mozilla/5.0 (Linux; Android 12.0; CPH2447) AppleWebKit/609.37 (KHTML, like Gecko) Opera/68.0.3975.135 [FBAN/FB4A;FBAV/336.0.0.74.99;FBBV/6095272;FBDM/{density=3.0,width=1080,height=2400}]",
    "Mozilla/5.0 (Linux; Android 13.0; CPH2447) AppleWebKit/551.39 (KHTML, like Gecko) SamsungBrowser/20.0",
    "Mozilla/5.0 (Linux; Android 11.0; CPH2449) AppleWebKit/545.35 (KHTML, like Gecko) Opera/60.0.3120.118",
    "Mozilla/5.0 (Linux; Android 11.0; OnePlus 10 Pro) AppleWebKit/573.31 (KHTML, like Gecko) UCBrowser/12.2.0.1226",
    "Mozilla/5.0 (Linux; Android 12.0; OnePlus 9) AppleWebKit/610.31 (KHTML, like Gecko) UCBrowser/15.2.0.1009 [FBAN/FB4A;FBAV/326.0.0.72.96;FBBV/5377733;FBDM/{density=3.0,width=1080,height=2400}]",
    "Mozilla/5.0 (Linux; Android 13.0; CPH2447) AppleWebKit/579.34 (KHTML, like Gecko) Opera/75.0.3333.152",
    "Mozilla/5.0 (Linux; Android 12.0; SM-S908B) AppleWebKit/570.32 (KHTML, like Gecko) EdgA/106.0.1593.93",
    "Mozilla/5.0 (Linux; Android 13.0; CPH2173) AppleWebKit/546.36 (KHTML, like Gecko) Chrome/99.0.4480.90 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 14.0; 2201122G) AppleWebKit/571.40 (KHTML, like Gecko) Opera/60.0.3915.173",
    "Mozilla/5.0 (Linux; Android 13.0; Pixel 8) AppleWebKit/540.31 (KHTML, like Gecko) Opera/72.0.3338.184",
    "Mozilla/5.0 (Linux; Android 13.0; Pixel 6) AppleWebKit/571.38 (KHTML, like Gecko) EdgA/103.0.1824.59 [FBAN/FB4A;FBAV/314.0.0.70.118;FBBV/5924500;FBDM/{density=3.0,width=1080,height=2400}]",
    "Mozilla/5.0 (Linux; Android 14.0; OnePlus 10 Pro) AppleWebKit/568.36 (KHTML, like Gecko) EdgA/111.0.1992.100",
    "Mozilla/5.0 (Linux; Android 14.0; Pixel 6) AppleWebKit/605.36 (KHTML, like Gecko) SamsungBrowser/21.0 [FBAN/FB4A;FBAV/346.0.0.81.104;FBBV/1704388;FBDM/{density=3.0,width=1080,height=2400}]",
    "Mozilla/5.0 (iPhone; CPU iPhone13,4 OS 17_4_1 like Mac OS X) AppleWebKit/605.1.20 (KHTML, like Gecko) OPR/68.0.3238.170565",
    "Mozilla/5.0 (iPhone; CPU iPhone13,3 OS 17_4 like Mac OS X) AppleWebKit/605.1.19 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone14,6 OS 17_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) DuckDuckGo/10 Mobile/15E148 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone14,5 OS 17_2_1 like Mac OS X) AppleWebKit/605.1.19 (KHTML, like Gecko) DuckDuckGo/10 Mobile/15E148 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone14,8 OS 17_3_1 like Mac OS X) AppleWebKit/605.1.16 (KHTML, like Gecko) CriOS/107.0.4720.107 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone15,3 OS 17_4 like Mac OS X) AppleWebKit/605.1.16 (KHTML, like Gecko) DuckDuckGo/8 Mobile/15E148 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone15,3 OS 17_3 like Mac OS X) AppleWebKit/605.1.17 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (Linux; Android 13.0; Pixel 6) AppleWebKit/565.32 (KHTML, like Gecko) UCBrowser/14.1.0.1045",
    "Mozilla/5.0 (Linux; Android 14.0; CPH2173) AppleWebKit/597.32 (KHTML, like Gecko) UCBrowser/15.5.0.1114",
    "Mozilla/5.0 (Linux; Android 11.0; OnePlus 9) AppleWebKit/600.35 (KHTML, like Gecko) Opera/62.0.3324.160",
    "Mozilla/5.0 (Linux; Android 14.0; OnePlus 10 Pro) AppleWebKit/595.38 (KHTML, like Gecko) UCBrowser/13.5.0.1243",
    "Mozilla/5.0 (Linux; Android 14.0; CPH2173) AppleWebKit/552.38 (KHTML, like Gecko) EdgA/102.0.1918.63",
    "Mozilla/5.0 (Linux; Android 12.0; Pixel 8 Pro) AppleWebKit/605.39 (KHTML, like Gecko) UCBrowser/13.0.0.1156",
    "Mozilla/5.0 (iPhone; CPU iPhone13,4 OS 17_4_1 like Mac OS X) AppleWebKit/605.1.20 (KHTML, like Gecko) OPR/68.0.3238.170565",
    "Mozilla/5.0 (iPhone; CPU iPhone13,3 OS 17_4 like Mac OS X) AppleWebKit/605.1.19 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone14,6 OS 17_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) DuckDuckGo/10 Mobile/15E148 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone14,5 OS 17_2_1 like Mac OS X) AppleWebKit/605.1.19 (KHTML, like Gecko) DuckDuckGo/10 Mobile/15E148 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone14,8 OS 17_3_1 like Mac OS X) AppleWebKit/605.1.16 (KHTML, like Gecko) CriOS/107.0.4720.107 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone15,3 OS 17_4 like Mac OS X) AppleWebKit/605.1.16 (KHTML, like Gecko) DuckDuckGo/8 Mobile/15E148 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone15,3 OS 17_3 like Mac OS X) AppleWebKit/605.1.17 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (Linux; Android 13.0; 2201123G) AppleWebKit/603.30 (KHTML, like Gecko) EdgA/110.0.1710.76",
    "Mozilla/5.0 (Linux; Android 13.0; CPH2449) AppleWebKit/559.31 (KHTML, like Gecko) Chrome/96.0.4621.89 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 12.0; CPH2173) AppleWebKit/603.40 (KHTML, like Gecko) SamsungBrowser/19.0",
    "Mozilla/5.0 (Linux; Android 12.0; XQ-BC52) AppleWebKit/604.34 (KHTML, like Gecko) EdgA/104.0.1253.56",
    "Mozilla/5.0 (Linux; Android 12.0; CPH2449) AppleWebKit/572.33 (KHTML, like Gecko) EdgA/110.0.1087.53",
    "Mozilla/5.0 (Linux; Android 11.0; CPH2447) AppleWebKit/583.30 (KHTML, like Gecko) EdgA/100.0.1176.68",
    "Mozilla/5.0 (Linux; Android 12.0; SM-G998B) AppleWebKit/541.32 (KHTML, like Gecko) UCBrowser/14.5.0.1045",
    "Mozilla/5.0 (iPhone; CPU iPhone14,3 OS 17_1 like Mac OS X) AppleWebKit/605.1.20 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone15,2 OS 17_2_1 like Mac OS X) AppleWebKit/605.1.20 (KHTML, like Gecko) EdgiOS/100.0.1648.77 Mobile/15E148 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone12,3 OS 17_0 like Mac OS X) AppleWebKit/605.1.16 (KHTML, like Gecko) CriOS/108.0.4046.119 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone15,3 OS 17_0_1 like Mac OS X) AppleWebKit/605.1.18 (KHTML, like Gecko) CriOS/105.0.4230.103 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone12,1 OS 17_3 like Mac OS X) AppleWebKit/605.1.16 (KHTML, like Gecko) FxiOS/29.0 Mobile/15E148 Safari/605.1.15 [FBAN/FBIOS;FBDV/iPhone12,1;FBMD/iPhone;FBSN/iOS;FBSV/17.3;FBSS/3;FBID/phone;FBLC/en_US;FBOP/5;FBRV/302.0.0.71.99]",
    "Mozilla/5.0 (iPhone; CPU iPhone14,8 OS 17_3 like Mac OS X) AppleWebKit/605.1.19 (KHTML, like Gecko) FxiOS/26.0 Mobile/15E148 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone12,5 OS 17_4 like Mac OS X) AppleWebKit/605.1.16 (KHTML, like Gecko) FxiOS/38.0 Mobile/15E148 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone15,5 OS 17_1_1 like Mac OS X) AppleWebKit/605.1.16 (KHTML, like Gecko) OPR/62.0.3458.161077 [FBAN/FBIOS;FBDV/iPhone15,5;FBMD/iPhone;FBSN/iOS;FBSV/17.1.1;FBSS/3;FBID/phone;FBLC/en_US;FBOP/5;FBRV/301.0.0.91.96]",
    "Mozilla/5.0 (iPhone; CPU iPhone12,1 OS 17_0 like Mac OS X) AppleWebKit/605.1.20 (KHTML, like Gecko) OPT/3.3.0",
    "Mozilla/5.0 (iPhone; CPU iPhone13,1 OS 17_2_1 like Mac OS X) AppleWebKit/605.1.18 (KHTML, like Gecko) EdgiOS/99.0.1845.66 Mobile/15E148 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone13,4 OS 17_2 like Mac OS X) AppleWebKit/605.1.18 (KHTML, like Gecko) OPT/4.7.0",
    "Mozilla/5.0 (iPhone; CPU iPhone14,4 OS 17_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) OPT/3.9.0",
    "Mozilla/5.0 (iPhone; CPU iPhone15,2 OS 17_3 like Mac OS X) AppleWebKit/605.1.16 (KHTML, like Gecko) EdgiOS/109.0.1049.13 Mobile/15E148 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone14,2 OS 17_1_1 like Mac OS X) AppleWebKit/605.1.16 (KHTML, like Gecko) FxiOS/20.0 Mobile/15E148 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone12,3 OS 17_0_1 like Mac OS X) AppleWebKit/605.1.16 (KHTML, like Gecko) CriOS/105.0.4271.118 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone13,2 OS 17_3_1 like Mac OS X) AppleWebKit/605.1.18 (KHTML, like Gecko) OPR/63.0.3346.176769",
    "Mozilla/5.0 (iPhone; CPU iPhone12,5 OS 17_4_1 like Mac OS X) AppleWebKit/605.1.17 (KHTML, like Gecko) CriOS/93.0.4874.82 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (Linux; Android 12.0; OnePlus 10 Pro) AppleWebKit/606.33 (KHTML, like Gecko) SamsungBrowser/16.0",
    "Mozilla/5.0 (Linux; Android 12.0; SM-G998B) AppleWebKit/570.31 (KHTML, like Gecko) Firefox/108.0",
    "Mozilla/5.0 (Linux; Android 11.0; 2201122G) AppleWebKit/598.35 (KHTML, like Gecko) EdgA/100.0.1189.75",
    "Mozilla/5.0 (Linux; Android 14.0; Pixel 7) AppleWebKit/576.35 (KHTML, like Gecko) EdgA/112.0.1951.78",
    "Mozilla/5.0 (Linux; Android 13.0; M2102K1G) AppleWebKit/602.40 (KHTML, like Gecko) UCBrowser/13.1.0.1252",
    "Mozilla/5.0 (Linux; Android 12.0; OnePlus 9) AppleWebKit/590.36 (KHTML, like Gecko) Opera/73.0.3675.174",
    "Mozilla/5.0 (Linux; Android 12.0; XQ-BC52) AppleWebKit/565.40 (KHTML, like Gecko) UCBrowser/13.2.0.1204",
    "Mozilla/5.0 (Linux; Android 13.0; M2102J20SG) AppleWebKit/537.39 (KHTML, like Gecko) UCBrowser/12.5.0.1246",
    "Mozilla/5.0 (iPhone; CPU iPhone12,5 OS 17_4 like Mac OS X) AppleWebKit/605.1.20 (KHTML, like Gecko) CriOS/94.0.5000.102 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone12,1 OS 17_0 like Mac OS X) AppleWebKit/605.1.16 (KHTML, like Gecko) DuckDuckGo/8 Mobile/15E148 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone14,5 OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) EdgiOS/93.0.1615.21 Mobile/15E148 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone12,5 OS 17_0_1 like Mac OS X) AppleWebKit/605.1.17 (KHTML, like Gecko) CriOS/93.0.4048.109 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone14,8 OS 17_4 like Mac OS X) AppleWebKit/605.1.19 (KHTML, like Gecko) EdgiOS/102.0.1589.34 Mobile/15E148 Safari/605.1.15",
    "Mozilla/5.0 (Linux; Android 14.0; OnePlus 11) AppleWebKit/567.38 (KHTML, like Gecko) SamsungBrowser/15.0",
    "Mozilla/5.0 (Linux; Android 12.0; SM-G996B) AppleWebKit/598.33 (KHTML, like Gecko) Chrome/104.0.4267.104 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 12.0; XQ-BC62) AppleWebKit/563.33 (KHTML, like Gecko) Chrome/92.0.4375.107 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 14.0; CPH2447) AppleWebKit/599.32 (KHTML, like Gecko) Firefox/100.0",
    "Mozilla/5.0 (Linux; Android 11.0; SM-S901B) AppleWebKit/569.36 (KHTML, like Gecko) Firefox/94.0",
    "Mozilla/5.0 (Linux; Android 13.0; Pixel 6 Pro) AppleWebKit/550.33 (KHTML, like Gecko) SamsungBrowser/17.0",
    "Mozilla/5.0 (Linux; Android 13.0; Pixel 8) AppleWebKit/555.31 (KHTML, like Gecko) EdgA/101.0.1030.76",
    "Mozilla/5.0 (Linux; Android 14.0; OnePlus 10 Pro) AppleWebKit/547.32 (KHTML, like Gecko) EdgA/112.0.1665.76",
    "Mozilla/5.0 (Linux; Android 11.0; Pixel 6 Pro) AppleWebKit/537.40 (KHTML, like Gecko) Opera/62.0.3162.159",
    "Mozilla/5.0 (Linux; Android 13.0; OnePlus 11) AppleWebKit/540.40 (KHTML, like Gecko) Opera/61.0.3959.136",
    "Mozilla/5.0 (Linux; Android 13.0; OnePlus 10 Pro) AppleWebKit/573.38 (KHTML, like Gecko) Firefox/93.0",
    "Mozilla/5.0 (Linux; Android 14.0; OnePlus 11) AppleWebKit/571.34 (KHTML, like Gecko) Opera/65.0.3478.157",
    "Mozilla/5.0 (Linux; Android 14.0; 2201123G) AppleWebKit/568.36 (KHTML, like Gecko) Chrome/102.0.4885.114 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 11.0; XQ-CT54) AppleWebKit/556.37 (KHTML, like Gecko) Opera/65.0.3319.149",
    "Mozilla/5.0 (Linux; Android 12.0; OnePlus 9) AppleWebKit/579.37 (KHTML, like Gecko) Opera/73.0.3475.128",
    "Mozilla/5.0 (Linux; Android 11.0; M2102K1G) AppleWebKit/590.32 (KHTML, like Gecko) Chrome/98.0.4114.106 Mobile Safari/537.36",
    "Mozilla/5.0 (iPhone; CPU iPhone15,3 OS 17_4 like Mac OS X) AppleWebKit/605.1.20 (KHTML, like Gecko) FxiOS/31.0 Mobile/15E148 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone13,2 OS 17_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) DuckDuckGo/9 Mobile/15E148 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone15,4 OS 17_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone13,4 OS 17_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone13,3 OS 17_3 like Mac OS X) AppleWebKit/605.1.17 (KHTML, like Gecko) EdgiOS/98.0.1702.82 Mobile/15E148 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone14,4 OS 17_0 like Mac OS X) AppleWebKit/605.1.17 (KHTML, like Gecko) FxiOS/26.0 Mobile/15E148 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone14,5 OS 17_4_1 like Mac OS X) AppleWebKit/605.1.20 (KHTML, like Gecko) OPR/70.0.3430.152485",
    "Mozilla/5.0 (iPhone; CPU iPhone15,3 OS 17_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) DuckDuckGo/7 Mobile/15E148 Safari/605.1.15 [FBAN/FBIOS;FBDV/iPhone15,3;FBMD/iPhone;FBSN/iOS;FBSV/17.3.1;FBSS/3;FBID/phone;FBLC/en_US;FBOP/5;FBRV/332.0.0.82.106]",
    "Mozilla/5.0 (iPhone; CPU iPhone14,8 OS 17_0_1 like Mac OS X) AppleWebKit/605.1.18 (KHTML, like Gecko) FxiOS/36.0 Mobile/15E148 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone14,3 OS 17_4_1 like Mac OS X) AppleWebKit/605.1.20 (KHTML, like Gecko) CriOS/98.0.4754.92 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone14,6 OS 17_0 like Mac OS X) AppleWebKit/605.1.17 (KHTML, like Gecko) EdgiOS/100.0.1034.90 Mobile/15E148 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone13,1 OS 17_2_1 like Mac OS X) AppleWebKit/605.1.20 (KHTML, like Gecko) OPT/4.3.0",
    "Mozilla/5.0 (iPhone; CPU iPhone13,2 OS 17_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/93.0.4138.81 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone13,4 OS 17_4_1 like Mac OS X) AppleWebKit/605.1.16 (KHTML, like Gecko) EdgiOS/106.0.1569.80 Mobile/15E148 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone14,5 OS 17_2 like Mac OS X) AppleWebKit/605.1.18 (KHTML, like Gecko) EdgiOS/105.0.1555.46 Mobile/15E148 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone14,4 OS 17_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/91.0.4338.120 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone14,5 OS 17_0 like Mac OS X) AppleWebKit/605.1.20 (KHTML, like Gecko) DuckDuckGo/9 Mobile/15E148 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone14,2 OS 17_2 like Mac OS X) AppleWebKit/605.1.19 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone12,5 OS 17_4_1 like Mac OS X) AppleWebKit/605.1.17 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone12,5 OS 17_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) EdgiOS/108.0.1026.94 Mobile/15E148 Safari/605.1.15",
    "Mozilla/5.0 (Linux; Android 13.0; OnePlus 10 Pro) AppleWebKit/559.33 (KHTML, like Gecko) UCBrowser/14.5.0.1193",
    "Mozilla/5.0 (Linux; Android 11.0; 2201122G) AppleWebKit/549.36 (KHTML, like Gecko) EdgA/112.0.1057.75",
    "Mozilla/5.0 (Linux; Android 12.0; 2201122G) AppleWebKit/540.35 (KHTML, like Gecko) Opera/62.0.3992.167",
    "Mozilla/5.0 (Linux; Android 13.0; Pixel 7) AppleWebKit/604.37 (KHTML, like Gecko) Chrome/105.0.4019.87 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 14.0; SM-G998B) AppleWebKit/574.31 (KHTML, like Gecko) SamsungBrowser/15.0",
    "Mozilla/5.0 (Linux; Android 14.0; SM-G991B) AppleWebKit/565.39 (KHTML, like Gecko) Opera/63.0.3245.183",
    "Mozilla/5.0 (iPhone; CPU iPhone14,4 OS 17_0 like Mac OS X) AppleWebKit/605.1.17 (KHTML, like Gecko) OPR/66.0.3434.178106",
    "Mozilla/5.0 (iPhone; CPU iPhone12,5 OS 17_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone14,5 OS 17_0 like Mac OS X) AppleWebKit/605.1.19 (KHTML, like Gecko) OPT/4.3.0",
    "Mozilla/5.0 (Linux; Android 12.0; SM-G991B) AppleWebKit/596.34 (KHTML, like Gecko) Firefox/106.0",
    "Mozilla/5.0 (Linux; Android 13.0; CPH2173) AppleWebKit/599.34 (KHTML, like Gecko) Firefox/101.0",
    "Mozilla/5.0 (Linux; Android 11.0; OnePlus 9) AppleWebKit/596.37 (KHTML, like Gecko) Firefox/102.0",
    "Mozilla/5.0 (Linux; Android 14.0; 2201122G) AppleWebKit/558.36 (KHTML, like Gecko) Opera/73.0.3303.113",
    "Mozilla/5.0 (Linux; Android 11.0; XQ-BC62) AppleWebKit/604.33 (KHTML, like Gecko) Chrome/103.0.4387.110 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 11.0; M2102K1G) AppleWebKit/580.38 (KHTML, like Gecko) SamsungBrowser/15.0",
    "Mozilla/5.0 (Linux; Android 13.0; OnePlus 9) AppleWebKit/553.38 (KHTML, like Gecko) EdgA/116.0.1383.90",
    "Mozilla/5.0 (Linux; Android 11.0; OnePlus 9) AppleWebKit/599.30 (KHTML, like Gecko) Firefox/104.0",
    "Mozilla/5.0 (Linux; Android 11.0; SM-S901B) AppleWebKit/589.31 (KHTML, like Gecko) Firefox/90.0",
    "Mozilla/5.0 (Linux; Android 11.0; CPH2447) AppleWebKit/548.38 (KHTML, like Gecko) Opera/74.0.3645.131",
    "Mozilla/5.0 (Linux; Android 11.0; CPH2447) AppleWebKit/579.31 (KHTML, like Gecko) UCBrowser/13.2.0.1217",
    "Mozilla/5.0 (Linux; Android 14.0; 2201122G) AppleWebKit/580.30 (KHTML, like Gecko) SamsungBrowser/17.0",
    "Mozilla/5.0 (Linux; Android 11.0; SM-G991B) AppleWebKit/610.36 (KHTML, like Gecko) SamsungBrowser/18.0",
    "Mozilla/5.0 (Linux; Android 14.0; OnePlus 10 Pro) AppleWebKit/561.36 (KHTML, like Gecko) Chrome/114.0.4956.99 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 14.0; OnePlus 11) AppleWebKit/543.31 (KHTML, like Gecko) UCBrowser/14.0.0.1201",
    "[FBAN/FBIOS;FBDV/iPhone14,7;FBMD/iPhone;FBSN/iOS;FBSV/17.1.1;FBSS/3;FBID/phone;FBLC/en_US;FBOP/5;FBRV/311.0.0.70.92]",
    "Mozilla/5.0 (iPhone; CPU iPhone13,2 OS 17_4_1 like Mac OS X) AppleWebKit/605.1.20 (KHTML, like Gecko) EdgiOS/93.0.1186.25 Mobile/15E148 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone12,5 OS 17_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) DuckDuckGo/10 Mobile/15E148 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone12,5 OS 17_0_1 like Mac OS X) AppleWebKit/605.1.17 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone13,3 OS 17_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) OPR/66.0.3412.176004",
    "Mozilla/5.0 (iPhone; CPU iPhone14,8 OS 17_3 like Mac OS X) AppleWebKit/605.1.17 (KHTML, like Gecko) OPR/67.0.3429.176607",
    "Mozilla/5.0 (iPhone; CPU iPhone14,3 OS 17_3_1 like Mac OS X) AppleWebKit/605.1.17 (KHTML, like Gecko) CriOS/101.0.4305.114 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone14,4 OS 17_1 like Mac OS X) AppleWebKit/605.1.18 (KHTML, like Gecko) FxiOS/38.0 Mobile/15E148 Safari/605.1.15 [FBAN/FBIOS;FBDV/iPhone14,4;FBMD/iPhone;FBSN/iOS;FBSV/17.1;FBSS/3;FBID/phone;FBLC/en_US;FBOP/5;FBRV/306.0.0.87.102]",
    "Mozilla/5.0 (iPhone; CPU iPhone14,6 OS 17_4 like Mac OS X) AppleWebKit/605.1.20 (KHTML, like Gecko) OPR/77.0.3378.166406",
    "Mozilla/5.0 (iPhone; CPU iPhone14,3 OS 17_3_1 like Mac OS X) AppleWebKit/605.1.18 (KHTML, like Gecko) DuckDuckGo/9 Mobile/15E148 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone14,4 OS 17_3 like Mac OS X) AppleWebKit/605.1.18 (KHTML, like Gecko) CriOS/99.0.4495.97 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone13,1 OS 17_4_1 like Mac OS X) AppleWebKit/605.1.17 (KHTML, like Gecko) DuckDuckGo/9 Mobile/15E148 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone15,4 OS 17_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) EdgiOS/110.0.1479.89 Mobile/15E148 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone14,8 OS 17_3 like Mac OS X) AppleWebKit/605.1.17 (KHTML, like Gecko) FxiOS/25.0 Mobile/15E148 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone12,3 OS 17_3 like Mac OS X) AppleWebKit/605.1.19 (KHTML, like Gecko) OPT/3.8.0",
    "Mozilla/5.0 (iPhone; CPU iPhone14,3 OS 17_3 like Mac OS X) AppleWebKit/605.1.16 (KHTML, like Gecko) OPT/4.9.0",
    "Mozilla/5.0 (iPhone; CPU iPhone15,4 OS 17_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) OPR/70.0.3468.174206",
    "Mozilla/5.0 (iPhone; CPU iPhone14,2 OS 17_2_1 like Mac OS X) AppleWebKit/605.1.20 (KHTML, like Gecko) OPR/62.0.3479.180064",
    "Mozilla/5.0 (iPhone; CPU iPhone13,3 OS 17_0_1 like Mac OS X) AppleWebKit/605.1.18 (KHTML, like Gecko) EdgiOS/90.0.1604.71 Mobile/15E148 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone14,2 OS 17_2_1 like Mac OS X) AppleWebKit/605.1.19 (KHTML, like Gecko) CriOS/92.0.4562.89 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone12,3 OS 17_2 like Mac OS X) AppleWebKit/605.1.18 (KHTML, like Gecko) FxiOS/31.0 Mobile/15E148 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone14,8 OS 17_1 like Mac OS X) AppleWebKit/605.1.20 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone14,4 OS 17_3_1 like Mac OS X) AppleWebKit/605.1.20 (KHTML, like Gecko) FxiOS/20.0 Mobile/15E148 Safari/605.1.15 [FBAN/FBIOS;FBDV/iPhone14,4;FBMD/iPhone;FBSN/iOS;FBSV/17.3.1;FBSS/3;FBID/phone;FBLC/en_US;FBOP/5;FBRV/310.0.0.90.99]",
    "Mozilla/5.0 (iPhone; CPU iPhone15,3 OS 17_3 like Mac OS X) AppleWebKit/605.1.19 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone12,5 OS 17_2 like Mac OS X) AppleWebKit/605.1.18 (KHTML, like Gecko) DuckDuckGo/8 Mobile/15E148 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone14,6 OS 17_4_1 like Mac OS X) AppleWebKit/605.1.18 (KHTML, like Gecko) OPT/4.8.0",
    "Mozilla/5.0 (iPhone; CPU iPhone13,3 OS 17_3 like Mac OS X) AppleWebKit/605.1.17 (KHTML, like Gecko) FxiOS/39.0 Mobile/15E148 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone14,6 OS 17_0 like Mac OS X) AppleWebKit/605.1.17 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone13,2 OS 17_0 like Mac OS X) AppleWebKit/605.1.20 (KHTML, like Gecko) OPR/65.0.3252.183776",
    "Mozilla/5.0 (iPhone; CPU iPhone14,5 OS 17_2 like Mac OS X) AppleWebKit/605.1.20 (KHTML, like Gecko) EdgiOS/99.0.1282.32 Mobile/15E148 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone14,4 OS 17_0 like Mac OS X) AppleWebKit/605.1.16 (KHTML, like Gecko) FxiOS/22.0 Mobile/15E148 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone12,3 OS 17_0 like Mac OS X) AppleWebKit/605.1.18 (KHTML, like Gecko) CriOS/103.0.4128.113 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone14,7 OS 17_4 like Mac OS X) AppleWebKit/605.1.19 (KHTML, like Gecko) OPR/74.0.3500.172906",
    "Mozilla/5.0 (iPhone; CPU iPhone14,4 OS 17_4 like Mac OS X) AppleWebKit/605.1.17 (KHTML, like Gecko) CriOS/92.0.4867.106 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (Linux; Android 11.0; XQ-BC52) AppleWebKit/563.37 (KHTML, like Gecko) Opera/72.0.3458.163",
    "Mozilla/5.0 (Linux; Android 12.0; XQ-BC52) AppleWebKit/569.39 (KHTML, like Gecko) Opera/62.0.3800.133",
    "Mozilla/5.0 (Linux; Android 12.0; SM-G996B) AppleWebKit/569.36 (KHTML, like Gecko) Chrome/100.0.4235.83 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 13.0; XQ-BC62) AppleWebKit/539.31 (KHTML, like Gecko) SamsungBrowser/20.0",
    "Mozilla/5.0 (Linux; Android 11.0; OnePlus 10 Pro) AppleWebKit/566.32 (KHTML, like Gecko) Opera/75.0.3428.138",
    "Mozilla/5.0 (Linux; Android 11.0; CPH2449) AppleWebKit/594.38 (KHTML, like Gecko) Chrome/103.0.4272.101 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 12.0; Pixel 7 Pro) AppleWebKit/601.35 (KHTML, like Gecko) UCBrowser/12.1.0.1090",
    "Mozilla/5.0 (iPhone; CPU iPhone14,4 OS 17_0 like Mac OS X) AppleWebKit/605.1.17 (KHTML, like Gecko) OPR/66.0.3434.178106",
    "Mozilla/5.0 (iPhone; CPU iPhone12,5 OS 17_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone14,5 OS 17_0 like Mac OS X) AppleWebKit/605.1.19 (KHTML, like Gecko) OPT/4.3.0",
    "Mozilla/5.0 (Linux; Android 11.0; XQ-BC62) AppleWebKit/540.38 (KHTML, like Gecko) EdgA/110.0.1710.83",
    "Mozilla/5.0 (Linux; Android 14.0; CPH2173) AppleWebKit/542.38 (KHTML, like Gecko) Opera/67.0.3246.118",
    "Mozilla/5.0 (Linux; Android 13.0; SM-G998B) AppleWebKit/597.37 (KHTML, like Gecko) SamsungBrowser/15.0",
    "Mozilla/5.0 (Linux; Android 14.0; OnePlus 11) AppleWebKit/562.31 (KHTML, like Gecko) UCBrowser/14.0.0.1149",
    "Mozilla/5.0 (Linux; Android 13.0; CPH2449) AppleWebKit/556.39 (KHTML, like Gecko) UCBrowser/14.1.0.1205",
    "Mozilla/5.0 (Linux; Android 14.0; XQ-BC52) AppleWebKit/557.39 (KHTML, like Gecko) Chrome/115.0.4301.115 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 13.0; 2201123G) AppleWebKit/555.36 (KHTML, like Gecko) UCBrowser/12.0.0.1156",
    "Mozilla/5.0 (Linux; Android 11.0; XQ-CT54) AppleWebKit/542.38 (KHTML, like Gecko) UCBrowser/12.0.0.1080",
    "Mozilla/5.0 (Linux; Android 12.0; 2201122G) AppleWebKit/559.36 (KHTML, like Gecko) SamsungBrowser/20.0",
    "Mozilla/5.0 (Linux; Android 11.0; SM-G991B) AppleWebKit/537.40 (KHTML, like Gecko) EdgA/102.0.1340.50",
    "Mozilla/5.0 (Linux; Android 13.0; CPH2173) AppleWebKit/578.40 (KHTML, like Gecko) Chrome/95.0.4776.116 Mobile Safari/537.36",
    "Mozilla/5.0 (iPhone; CPU iPhone15,4 OS 17_0_1 like Mac OS X) AppleWebKit/605.1.16 (KHTML, like Gecko) OPR/65.0.3470.166083",
    "Mozilla/5.0 (iPhone; CPU iPhone15,2 OS 17_3_1 like Mac OS X) AppleWebKit/605.1.17 (KHTML, like Gecko) OPR/77.0.3401.165152",
    "Mozilla/5.0 (iPhone; CPU iPhone15,2 OS 17_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) OPR/61.0.3350.174679"
];

export default userAgents;