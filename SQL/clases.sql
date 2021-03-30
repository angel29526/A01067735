-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 30, 2021 at 04:58 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `clases_fate`
--

-- --------------------------------------------------------

--
-- Table structure for table `clases`
--

CREATE TABLE `clases` (
  `id` int(11) NOT NULL,
  `nombre` varchar(60) COLLATE utf8_spanish2_ci NOT NULL,
  `imagen` varchar(400) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Dumping data for table `clases`
--

INSERT INTO `clases` (`id`, `nombre`, `imagen`, `created_at`) VALUES
(1, 'Saber', 'https://www.wallpapertip.com/wmimgs/31-314750_saber-fate-stay-night.jpg', '2021-03-30 02:52:47'),
(2, 'Archer', 'https://images.alphacoders.com/945/945556.png', '2021-03-30 02:52:47'),
(3, 'Lancer', 'https://theafictionado.files.wordpress.com/2015/01/utw_fate_zero_-_04_h264-720p3a05b4e1-mkv_snapshot_12-18_2014-11-30_15-30-33.jpg', '2021-03-30 02:55:33'),
(4, 'Berserker', 'https://i.pinimg.com/originals/d4/48/3c/d4483c877009903277befac762484aa7.png', '2021-03-30 02:55:33');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `clases`
--
ALTER TABLE `clases`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `clases`
--
ALTER TABLE `clases`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
