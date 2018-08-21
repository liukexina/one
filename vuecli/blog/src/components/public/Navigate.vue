<template>
    <div>
        <div class="pos-f-t">
            <div class="collapse" id="navbarToggleExternalContent">
                <div class="bg-dark p-4">
                    <h4 class="text-white">刘可新的博客</h4>
                    <span class="text-muted">Experience is the best teacher.经验是最好的教师</span>
                </div>
                <div class="text-img">
                    <img src="image/tu.jpg" alt="">
                </div>
            </div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark">
                <button class="navbar-toggler btn" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="#">首页</a>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">JavaScript</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Html</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Css</a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
        <div class="container">
            <div class="title">
                <div class="card cardmain" style="width: 18rem; background: #343a40;">
                    <img class="card-img-top card-img" src="image/tu.jpg" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go Head</a>
                    </div>
                </div>
                <div class="card cardmain" style="width: 18rem;  background: #343a40;">
                    <div class="card-header">
                        最新文章
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Cras justo odio</li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                    </ul>
                </div>
                <div id="accordion" >
                    <div class="card" >
                        <div class="card-header card-header-spe" id="headingOne"style="background:#343a40;" >
                            <h5 class="mb-0">
                                <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    title1
                                </button>
                            </h5>
                        </div>
                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                            <div class="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header card-header-spe" id="headingTwo" style="background:#343a40;">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    title2
                                </button>
                            </h5>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div class="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header card-header-spe" id="headingThree" style="background:#343a40;">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    title3
                                </button>
                            </h5>
                        </div>
                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                            <div class="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main">
                <div class="title1">
                    <div class="container">
                        <h4>垂直水平居中</h4>
                        <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                        <a href="js/one-1.html" class="more">
                            阅读全文
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<style scoped>
    *{
        margin:0;
        padding:0;
    }
    body{
        background: #f3f3f3;
    }
    @media (min-width: 992px){
        .navbar-expand-lg .navbar-toggler {
            display: block;
        }
    }
    .show{
        position: relative;
    }
    .text-img{
        position: absolute;
        top:50%;
        height: 50px;
        width: 50px;
        right:0;
        transform: translateY(-50%) translateX(-50%);
    }
    .text-img img{
        height: 50px;
        width: 50px;
        border-radius: 50%;
    }
    .navbar-expand-lg .navbar-toggler{
        margin-right:20px;
    }
    .cardmain{
        margin-top:20px;
        color:white;
    }
    .card-img{
        border-radius: 50%;
        transform: scale(0.5);
        margin:0 auto;
        height: 250px;
        width: 250px;
    }
    .card-body-body{
        margin-top:20px;
    }

    .title{
        width: 288px;
        float:right;
    }
    .list-group-item{
        color:#343a40;
    }
    #accordion{
        margin-top:20px;
    }
    .card-header-spe {
        padding: .35rem 1.25rem;
    }
    .btn-link {
        color:white;
    }
    .main{
        margin-top: 20px;
        width: 800px;
        float:left;
    }
    .title1{
        padding: 2rem 1rem;
        margin-bottom: 2rem;
        background-color: #e9ecef;
    }
    .more{
        float:right;
    }
</style>
<script>

</script>