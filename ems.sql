-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 04 Sep 2017 pada 10.02
-- Versi Server: 5.7.19-0ubuntu0.16.04.1
-- PHP Version: 7.0.22-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ems`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `brand`
--

CREATE TABLE `brand` (
  `id` int(11) NOT NULL,
  `label` varchar(512) NOT NULL,
  `series` varchar(512) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `brand`
--

INSERT INTO `brand` (`id`, `label`, `series`) VALUES
(1, 'SAMSUNG', '10AEF'),
(2, 'SONY', '784EE');

-- --------------------------------------------------------

--
-- Struktur dari tabel `equipment`
--

CREATE TABLE `equipment` (
  `id` int(11) NOT NULL,
  `label` varchar(512) NOT NULL,
  `id_brand` int(11) NOT NULL,
  `id_equipmentType` int(11) NOT NULL,
  `last_value` int(11) DEFAULT NULL,
  `last_update` varchar(512) DEFAULT NULL,
  `top` int(11) NOT NULL,
  `left` int(11) NOT NULL,
  `id_store` int(11) NOT NULL,
  `position` varchar(512) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `equipment`
--

INSERT INTO `equipment` (`id`, `label`, `id_brand`, `id_equipmentType`, `last_value`, `last_update`, `top`, `left`, `id_store`, `position`) VALUES
(1, 'AC1', 1, 1, 0, '2017-08-22 12:47:56', 20, 80, 1, ''),
(12, 'Chiller1', 2, 2, NULL, '2017-08-23 16:02:31', 20, 20, 1, '');

-- --------------------------------------------------------

--
-- Struktur dari tabel `equipmentType`
--

CREATE TABLE `equipmentType` (
  `id` int(11) NOT NULL,
  `label` varchar(512) NOT NULL,
  `max_value` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `equipmentType`
--

INSERT INTO `equipmentType` (`id`, `label`, `max_value`) VALUES
(1, 'AC', 200),
(2, 'Chiller', 1000);

-- --------------------------------------------------------

--
-- Struktur dari tabel `location`
--

CREATE TABLE `location` (
  `id` int(11) NOT NULL,
  `label` varchar(512) NOT NULL,
  `latitude` double NOT NULL,
  `longitude` double NOT NULL,
  `zoom` int(11) NOT NULL,
  `type` varchar(512) NOT NULL,
  `id_parent` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `location`
--

INSERT INTO `location` (`id`, `label`, `latitude`, `longitude`, `zoom`, `type`, `id_parent`) VALUES
(1, 'DKI Jakarta', -6.17511, 106.865039, 11, 'Province', NULL),
(2, 'Jakarta Selatan', -6.261493, 106.8106, 12, 'Zone', 1),
(3, 'Kebayoran Lama', -6.244392, 106.776544, 14, 'Branch', 2),
(4, 'Kantor Pondok Pinang store', -6.244392, 106.776544, 18, 'Store', 3),
(14, 'Jawa Barat', -7.090911, 107.668887, 11, 'Province', NULL),
(15, 'Bandung ', -7.090911, 107.668887, 12, 'Zone', 14),
(16, 'Cijulang', -7.090911, 107.668887, 14, 'Branch', 15),
(17, 'STORE CIJULANG', -7.090911, 107.668887, 18, 'Store', 16),
(19, 'STORE CIPARAY', -7.08393, 107.696099, 16, 'Store', 16),
(31, 'Jakarta Pusat', 10, 10, 10, 'Zone', 14);

-- --------------------------------------------------------

--
-- Struktur dari tabel `store`
--

CREATE TABLE `store` (
  `id` int(11) NOT NULL,
  `label` varchar(512) NOT NULL,
  `image` varchar(512) DEFAULT NULL,
  `id_location` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `store`
--

INSERT INTO `store` (`id`, `label`, `image`, `id_location`) VALUES
(6, 'Kantor Gandaria', '', 39);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brand`
--
ALTER TABLE `brand`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `equipment`
--
ALTER TABLE `equipment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `equipmentType`
--
ALTER TABLE `equipmentType`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `store`
--
ALTER TABLE `store`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `brand`
--
ALTER TABLE `brand`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `equipment`
--
ALTER TABLE `equipment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `equipmentType`
--
ALTER TABLE `equipmentType`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `location`
--
ALTER TABLE `location`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
--
-- AUTO_INCREMENT for table `store`
--
ALTER TABLE `store`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
