const header = document.getElementsByTagName("header")[0]
header.innerHTML = `
<div
            style="display: flex; justify-content: space-around;background-color:purple; align-items: center;">
            <div class="logo">
                <a href=""><img src="https://alphainet.com/wp-content/uploads/2019/07/logo-1933884_1280.png"
                        style="width:60px;height:60px " alt=""></a>
            </div>
            <ul style="display: flex; gap: 20px; list-style: none;">
                <li><a style="color: white;text-decoration: none;" href="">Home</a></li>
                <li><a style="color: white;text-decoration: none;" href="">Contact</a></li>
                <li><a style="color: white;text-decoration: none;" href="">About</a></li>
                <li><a style="color: white;text-decoration: none;" href="">Blog</a></li>
                <li><a style="color: white;text-decoration: none;" href="">Service</a></li>
            </ul>
</div>
 
`