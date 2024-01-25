-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-01-2024 a las 20:23:39
-- Versión del servidor: 10.4.6-MariaDB
-- Versión de PHP: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_tienda_flask`
--


CREATE DATABASE IF NOT EXISTS bd_tienda_flask;
use bd_tienda_flask;
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `id` int(11) UNSIGNED NOT NULL,
  `nombre` varchar(191) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `apellidos` varchar(191) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `direccion` varchar(191) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `tarjeta` bigint(20) DEFAULT NULL,
  `comentario` varchar(191) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `ip` varchar(255) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `user_agent` varchar(1200) COLLATE utf8mb4_unicode_520_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`id`, `nombre`, `apellidos`, `direccion`, `tarjeta`, `comentario`, `ip`, `user_agent`) VALUES
(2, 'alejandro', 'cabo guisado', 'calle de las encinas 27, municipio, madrid', 1234123412341234, 'comentario adicional', '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'),
(3, 'alejandro', 'cabo guisado', 'calle de las encinas 27, municipio, madrid', 1234123412341234, 'comentario adicional', '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'),
(10, 'asdasda', 'asdasdad', 'dasdadasd', 1234123412341234, 'asdadadada', '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'),
(11, 'asdasda', 'asdasdad', 'dasdadasd', 1234123412341234, 'asdadadada', '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'),
(12, 'asdfasdf', 'asdfasdf', 'asdfasdf', 1234123412341234, 'asdfasdfasdf', '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'),
(13, 'ahsjkdfgjasd', 'kajsdbfasdf', 'aasdkjfh iugahsdi hiuasd', 1234123412341234, 'aashdbf hjkasdhjfgaishdgf ihagsdyihfgihasdgfhijagsdhjfgajhsdgfjhagsjhdfg jhasgdjkh gahsjg f', '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productopedido`
--

CREATE TABLE `productopedido` (
  `id` int(11) UNSIGNED NOT NULL,
  `id_pedido` tinyint(3) UNSIGNED DEFAULT NULL,
  `id_producto` tinyint(3) UNSIGNED DEFAULT NULL,
  `cantidad` tinyint(3) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

--
-- Volcado de datos para la tabla `productopedido`
--

INSERT INTO `productopedido` (`id`, `id_pedido`, `id_producto`, `cantidad`) VALUES
(2, 2, 1, 7),
(3, 2, 4, 7),
(4, 2, 5, 3),
(5, 2, 6, 1),
(6, 3, 1, 1),
(7, 3, 4, 2),
(10, 10, 3, 1),
(11, 11, 3, 1),
(12, 12, 3, 1),
(13, 13, 4, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prueba`
--

CREATE TABLE `prueba` (
  `asdasd` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `videojuegos`
--

CREATE TABLE `videojuegos` (
  `id` int(11) UNSIGNED NOT NULL,
  `nombre` varchar(191) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `descripcion` varchar(191) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `precio` decimal(10,2) DEFAULT NULL,
  `plataforma` varchar(191) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `desarrollador` varchar(191) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `genero` varchar(191) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `fecha_lanzamiento` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

--
-- Volcado de datos para la tabla `videojuegos`
--

INSERT INTO `videojuegos` (`id`, `nombre`, `descripcion`, `precio`, `plataforma`, `desarrollador`, `genero`, `fecha_lanzamiento`) VALUES
(1, 'Elden Ring', 'Juego rpg online', '62.55', 'PC', 'FromSoftware', 'rpg-mundo abierto', '2022-02-25'),
(3, 'Red Dead Redemption2', 'videojuego de acción-aventura de temática western ambientado en un entorno de mundo abierto ', '45.40', 'PS5', 'Rockstar Games', 'mmundo abierto', '2018-10-26'),
(4, 'Spiderman 2', 'juego para un jugador de mundo abierto-rpg', '69.99', 'PS5', 'Insomniac Games', 'mundo abierto-rpg', '2023-10-22'),
(5, 'Cyberpunk 2077', 'juego de rol de acción y aventura de mundo abierto ambientado en Night City, una megalópolis obsesionada con el poder, el glamour y la modificación del cuerpo', '39.69', 'Xbox Series X', 'CD Projekt Red', 'rpg-modo historia-rol', '2020-12-10'),
(6, 'EA Sports FC 2024', 'Sumérgete en la acción con gráficos realistas y controles intuitivos mientras controlas equipos nacionales y clubes de fútbol de élite.', '49.95', 'PC, PS5, PS4, Xbox (todas)', 'EA', 'futbol, deportes, online', '2023-09-22');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productopedido`
--
ALTER TABLE `productopedido`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `videojuegos`
--
ALTER TABLE `videojuegos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `productopedido`
--
ALTER TABLE `productopedido`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `videojuegos`
--
ALTER TABLE `videojuegos`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
