<?php session_start();

if (!isset($_SESSION['email'])) {
    header('Location: login.php');
    exit();}

    
    

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meus Pets</title>
    <link rel="stylesheet" href="./Css/meuPets.css">
    <link rel="stylesheet" href="./Css/footer.css">
    <link rel="stylesheet" href="./Css/header.css">
</head>

<body>
    <nav>
        <div class="header1">
            <a href=""><img id="logo" src="./Img/Logo.png" alt="Logo"></a>
            <a href=""><img id="telefone" src="./Img/telefone.png" alt="Contato"></a>
            <a href=""><img id="carrinhoCompra" src="./Img/carrinhoCompra.png" alt="Carrinho de Compra"></a>
            <a href="#"><img id="usuario" src="./Img/user.png" alt="Usuário"></a>
            <div class="log">
                <div class="item">
                    <a href="#"><img id="usuario" src="./Img/user.png" alt="Usuário"></a>
                    <a href="">...</a>
                    <a href="">...</a>
                    <a href="">...</a>
                    <a href="">...</a>
                    <a href="#" id="logout">Logout</a>
                </div>
            </div>
            <div class="menuHb">
                <div class="linha1"></div>
                <div class="linha2"></div>
                <div class="linha3"></div>
            </div>
        </div>
        <div class="header2">
            <ul class="navLink">
                <li><a href="#">Produtos</a></li>
                <li><a href="#">Veterinário</a></li>
                <li><a href="#">Banho</a></li>
                <li><a href="#">Contato</a></li>
                <li><a href="#">Sobre Nós</a></li>
                <li id="bg"><a href="#">Carrinho</a></li>
                <li id="bg"><a href="#">Conta</a></li>
            </ul>
        </div>
    </nav>


    <h1>Meus Pets</h1>

    <label for="usuario">Usuário: <?php echo $_SESSION['email']; ?></label> <br>

    <form action="" method="POST">
        <label for="pets">Pets:</label>
        <div class="listaPets">
            <?php include_once('../Connection/meusPetsLogica.php')?>
        </div>
    </form>
    <form action="..//Connection/excluirMeuPet.php" method="POST">
        <input type="text" name="nomePet" value="">
        <input type="submit" name="excluir" value="excluir">
    </form>
    <br><br>
    <!-- Adicione este formulário para realizar o logout -->
    <form action="../Connection/logOut.php" method="POST">
        <input type="submit" value="Logout" name="logout">
    </form>
    <a href="agendarPet.php">Agendar Consulta</a>



    <footer>
        <div class="f1">
            <a href=""><img id="instagram" src="./Img/instagram 1.png" alt="Instagram"></a>
            <a href=""><img id="facebook" src="./Img/facebook 1.png" alt="Instagram"></a>
            <a href=""><img id="twitter" src="./Img/twitter 1.png" alt="Instagram"></a>
        </div>
        <div class="f2">
            <a href="">
                <p id="sobre">Sobre</p>
            </a>
            <img id="line" src="./Img/Line 2.png" alt="line">
            <a href="">
                <p id="contato">Contato</p>
            </a>
        </div>
    </footer>
    <script src="./Js/carousel.js"></script>
    <script src="./Js/navbar.js"></script>
    <script src="./Js/usuario.js"></script>
    <script src="./Js/config.js"></script>

</body>

</html>