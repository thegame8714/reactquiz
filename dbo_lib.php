<?php

// DB Config
$servername = "169.254.225.244";
$username = "root";
$password = "root";
$dbname = "quizez";


class DBO
{
	var $server;
	var $username;
	var $password;
	var $database;
	
	var $konexioa;
	var $emaitza;
	var $query;
	
	function DBO($server, $username, $password, $database)
	{
		$this->server=$server;
		$this->username=$username;
		$this->password=$password;
		$this->database=$database;
		
		if ($konexioa=mysql_connect($server, $username, $password))
			if (mysql_select_db($database, $konexioa))
			{
				$this->konexioa=$konexioa;
				return true;
			}
			else
			{
				echo "There's no database $database.";
				return false;
			}
		else
		{
			echo "We can't connect to the database because we are lazy!!!";
			return false;
		}
	}
	
	function query($sql)
	{
		
		if($this->query=mysql_query($sql, $this->konexioa))
			return true;
		else 
			return false;
	}
	
	function emaitza()
	{
		$this->emaitza=mysql_fetch_array($this->query);	
		return $this->emaitza;
	}
	
	function itxi()
	{
		return mysql_close($this->konexioa);
	}
		
	function ShowError()
	{
  die("Error " . mysql_errno() . " : " . mysql_error());
	}

	function emaitza_kopurua()
	{
		return mysql_num_rows($this->query);
	}

	function hasierara()
	{
		if (mysql_field_seek ($this->query, 0))
			return true;
		else
			return false;
	}


}

