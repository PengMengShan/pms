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
    $wenjian = $_GET["wenjian"];
    // 创建 和 读取 和写入
    $myfile = fopen("result/jieguo1.txt","a");
    // 写入
    fwrite($myfile,"--姓名:".$qingkuang."--邮箱:". $email."--留言:".$liuyan."文件接收:".$wenjian."\n");
    // 关闭文件
    fclose($myfile);

    echo "完成";

?>
 <a href="index.html"><br/>返回首页</a>
</body>
</html>

