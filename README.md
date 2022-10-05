# admin-dashboard



## 介紹

此為參考[Lama](https://github.com/safak/youtube/tree/react-admin)製作之 dashboard project，除了dashboard外另有其[電商網站](https://github.com/m42532461/vite-react/tree/eCommerce)

前端使用 React框架 + Vite架構，比起 create-react-app建立更為輕量的架構，CSS部分使用 Tailwind CSS當作練習，資料來自[後端 api](https://github.com/m42532461/eCommerceAPI)



## 如何啟用

需安裝 [node.js](https://nodejs.org/zh-tw/download/)，下載 code後進入本資料夾，先執行```npm i```下載所需 module，並執行```npm run dev```，進入其路徑即可看到畫面

![執行npm run dev後結果](https://upload.cc/i1/2022/10/05/vVjb5k.jpg)

如上圖中的 __"http://127.0.0.1:5173/"__

__注意__ : 需搭配其後端 api，否則頁面抓不到資料，請參考[後端 README](https://github.com/m42532461/eCommerceAPI)。



## 畫面與說明


### Login

進入頁面後，會被引導至登入畫面，因為這是dashboard後台網頁，在未登入的情況下是不允許看到任何資訊的，因此此時點擊 side bar中任何頁面皆不會有動作

![登入畫面](https://upload.cc/i1/2022/10/05/41olbp.jpg)

登入後且確認是admin帳號才允許進入 dashboard中的任何頁面


### Home頁面

Home頁面分成3個部分

上部分為相比上個月之收入、銷售數、及花費之比較

![Home first part](https://upload.cc/i1/2022/10/05/WlynJx.jpg)

中部份為每個月新註冊使用者之趨勢圖

![Home second part](https://upload.cc/i1/2022/10/05/2h1ZAS.jpg)

下部分為最新加入之使用者與最近幾筆交易紀錄

![Home third part](https://upload.cc/i1/2022/10/05/g60aTu.jpg)


### Users頁面

Users頁面可以檢視所有已註冊的使用者

![Users頁面](https://upload.cc/i1/2022/10/05/HOctdl.jpg)

並可點擊edit進入編輯修改使用者資料

![編輯使用者](https://upload.cc/i1/2022/10/05/2BsNlb.jpg)

也可在編輯使用者畫面點擊create進入新增使用者頁面

![新增使用者](https://upload.cc/i1/2022/10/05/iFN86k.jpg)


### Product頁面

在Products頁面可看到所有商品

![Products頁面](https://upload.cc/i1/2022/10/05/VSIZMA.jpg)

並可點擊 edit進入編輯畫面

![編輯商品](https://upload.cc/i1/2022/10/05/fEnMaI.jpg)

在編輯畫面中也可以點擊 create進入新增商品頁面

![新增商品](https://upload.cc/i1/2022/10/05/2IPChH.jpg)






