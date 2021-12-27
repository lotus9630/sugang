# Sugang

대학교 수강 신청 시스템을 구현한 웹 서비스

# Tech

<p>
<img src="https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=html5&logoColor=white"></a>&nbsp 
<img src="https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=css3&logoColor=white"></a>&nbsp 
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=white"></a>&nbsp 
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white"></a>&nbsp 
<img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=javascript&logoColor=white"></a>&nbsp 
<img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white"></a>&nbsp 
<img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white"></a>&nbsp 
<img src="https://img.shields.io/badge/Google Cloud-4285F4?style=flat-square&logo=googlecloud&logoColor=white"></a>&nbsp 
</p>

# Development

## Backend

    git clone https://github.com/lotus9630/sugang.git
    cd sugang/backend
    yarn install
    yarn start
    open http://localhost:4000

## Frontend

    git clone https://github.com/lotus9630/sugang.git
    cd sugang/frontend
    yarn install
    yarn start
    open http://localhost:3000

# Production

## Backend

    npm i -g pm2
    git clone https://github.com/lotus9630/sugang.git
    cd sugang/backend
    yarn install
    pm2 start app

## Frontend

    git clone https://github.com/lotus9630/sugang.git
    cd sugang/frontend
    yarn install
    yarn build
    cp -r dist/* ../backend/public
