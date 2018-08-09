<template>
    <div>
        <nav class="navbar navbar-light bg-light justify-content-between" style="border-radius:5%;width: 50%; margin:0 auto">
            <a class="navbar-brand">Navbar</a>
            <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
        <div class="card" style="width: 18rem; margin:0 auto">
            <img class="card-img-top" src="../assets/tu.jpg" alt="Card image cap" style="margin:0 auto;transform: scale(0.8);height: 180px;width:180px;">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        <div class="box">
            <h1>子路由1</h1>
            <h2>姓名：{{$route.params.name}}</h2>
            <h2>年龄：{{$route.params.age}}</h2>
        </div>
    </div>
</template>

<style scoped>
    .box{
        width: 1142px;
        height: 150px;
        background: #f3f3f3;
        margin: 0 auto;
    }
</style>