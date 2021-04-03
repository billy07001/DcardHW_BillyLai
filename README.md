# 1.啟動說明
本作業用React-App開發，可用CMD或Powershell進入資料夾，並輸入`npm start`，即可啟用。

# 2.作業架構說明
在src資料夾下的架構:

    -/component -/scenicSpot -/ChanghuaCounty -ChanghuaCounty.js  
                             -/Chiayi         -Chiayi.js   
                             -/ChiayiCounty   -ChiayiCounty.js  
                             -/Hsinchu        -Hsinchu.js  
                             -/HsinchuCounty  -HsinchuCounty.js  
                             -/HualienCounty  -HualienCounty.js  
                             -/Kaohsiung      -Kaohsiung.js  
                             -/Keelung        -Keelung.js  
                             -/KinmenCounty   -KinmenCounty.js  
                             -/LienchiangCounty -LienchiangCounty.js  
                             -/MiaoliCounty   -MiaoliCounty.js  
                             -/NantouCounty   -NantouCounty.js  
                             -/NewTaipei      -NewTaipei.js  
                             -/PenghuCounty   -PenghuCounty.js  
                             -/PingtungCounty -PingtungCounty.js
                             -/Taichung       -Taichung.js
                             -/Tainan         -Tainan.js
                             -/Taipei         -Taipei.js
                             -/TaitungCounty  -TaitungCounty.js
                             -/Taoyuan        -Taoyuan.js
                             -/YilanCounty    -YilanCounty.js
                             -/YunlinCounty   -YunlinCounty.js
                             -/scenicSpot.js
               -App.js
                
    -/style    -App.css
               -index.css
               -nav.css
    -index.js
 在 `src/index.js` 裡將 `src/component/App.js` 渲染至 `public/index.html` , 以`src/component/App.js`為首頁，上方Navbar提供三個連結，分別會route至 首頁 全部景點列表 縣市景點列表，全部景點列表在`src/component/scenicSpot/scenicSpot.js` ，縣市景點列表會根據Dropdown的縣市選擇，route至在`src/component/scenicSpot`下相對應的縣市資料夾
