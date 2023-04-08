<?php
     include 'form.html';
     if(isset($_POST['submit']))
    {
        $conn = mysqli_connect('127.0.0.1', 'root', '', 'lb11');
        $sql = 'SELECT student.name, school_log.mark     
        FROM student Inner Join school_log ON student.id_student = school_log.id_student_school_log , 
           specialty Inner Join group ON specialty.id_specialty = group.id_specialty AND group.id_group = student.id_group_student        
        WHERE student.name =  \''.$_POST['student-name'].'\'';
        $resul = mysqli_query($conn, $sql);
        if(mysqli_num_rows($resul)>0)
        {
            echo '<table>';
            while($rr = mysqli_fetch_assoc($resul))
            {
                echo '<tr><td>'.$rr['student-name'].'</td></tr>';
            }
            echo '</table>';
        }
        else
        {
            echo 'Информации нет';
        }
    }
    else
    {
        $_POST = null;
        echo 'Введите информацию';
    }
?>

?>