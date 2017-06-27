<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Document</title>
</head>
<body>
    <?php
    $qingkuang = $_GET["qingkuang"];
    $email = $_GET["email"];
    $liuyan = $_GET["liuyan"];

    // 创建 和 读取 和写入
    $myfile = fopen("result/jieguo.txt","a");
    // 写入
    fwrite($myfile,"--姓名:<br>".$qingkuang."--邮箱:<br>".$email."--留言:<br>".$liuyan."\n");
    // 关闭文件
    fclose($myfile);

    echo "完成";

?>
 <a href="index.html"><br/>返回首页</a>
</body>
</html>

