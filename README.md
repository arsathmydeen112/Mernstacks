# Mernstacks
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login page</title>
    <style>
        body{
            font-family: monospace;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: lightblue;
        }
        .login-container
        {
            background-color: pink;
            padding: 30px;
            border-radius: 10px;
            box-shadow: burlywood;
        }
        .login-container h2
        {
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 30px;
            font-style: bold;
        }
        .login-container input[type="text"], .login-container input[type="password"]
        {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100px;
            padding: 10px;
            background-color: whitesmoke;
            border-radius: 30px;
            cursor:pointer;
        }
        .login-container button
        {
            display:flex:
            justify-content: center;
            width:100px;
            padding:10px;
            background-color: whitesmoke;
            border-radius:30px;
            cursor:pointer;
        }
        .login-container :hover
        {
            background-color:pink;
        }
        
    </style>
</head>
<body>
    <div class="login-container">
        <h2>Login</h2>
        <form>
            <input type="text" placeholder="Username" required>
            <br>
            <input type="password" placeholder="Password" required>
            <br>
            <button type="submit">Login</button>
        </form>

    </div>
    
</body>
</html>