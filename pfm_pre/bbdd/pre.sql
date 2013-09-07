-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 06-09-2013 a las 23:42:50
-- Versión del servidor: 5.5.25
-- Versión de PHP: 5.4.4

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de datos: `pre`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `evento`
--

DROP TABLE IF EXISTS `evento`;
CREATE TABLE `evento` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `local_id` int(11) NOT NULL,
  `cartel` varchar(250) NOT NULL,
  `descripcion` varchar(250) DEFAULT NULL,
  `musica` varchar(250) DEFAULT NULL,
  `entrada` varchar(250) DEFAULT NULL,
  `inicio` datetime DEFAULT NULL,
  `fin` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=25 ;

--
-- Volcado de datos para la tabla `evento`
--

INSERT INTO `evento` (`id`, `nombre`, `local_id`, `cartel`, `descripcion`, `musica`, `entrada`, `inicio`, `fin`) VALUES
(22, 'nombre', 22, '20131001_22.jpg', 'descripcion', 'musica', NULL, '2013-10-02 00:00:00', '2013-10-02 06:00:00'),
(23, 'nombre', 22, '20131001_22.jpg', 'descripcion', 'musica', NULL, '2013-10-01 22:00:00', '2013-10-02 02:00:00'),
(24, 'nombre', 22, '20131001_22.jpg', 'descripcion', 'musica', 'entrada', '2013-10-01 22:00:00', '2013-10-02 02:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `local`
--

DROP TABLE IF EXISTS `local`;
CREATE TABLE `local` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `direccion` varchar(50) NOT NULL,
  `logo` varchar(250) NOT NULL,
  `portada` varchar(250) NOT NULL,
  `latitud` varchar(12) NOT NULL,
  `longitud` varchar(12) NOT NULL,
  `descripcion` varchar(250) DEFAULT NULL,
  `horario` varchar(250) DEFAULT NULL,
  `ofertas` varchar(250) DEFAULT NULL,
  `musica` varchar(250) DEFAULT NULL,
  `entrada` varchar(250) DEFAULT NULL,
  `web` varchar(250) DEFAULT NULL,
  `facebook` varchar(250) DEFAULT NULL,
  `twitter` varchar(250) DEFAULT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `aforo` varchar(20) DEFAULT NULL,
  `tipo` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=24 ;

--
-- Volcado de datos para la tabla `local`
--

INSERT INTO `local` (`id`, `nombre`, `direccion`, `logo`, `portada`, `latitud`, `longitud`, `descripcion`, `horario`, `ofertas`, `musica`, `entrada`, `web`, `facebook`, `twitter`, `telefono`, `email`, `aforo`, `tipo`) VALUES
(22, 'local1', 'direccion', 'blue_monkey.png', 'bereber.png', '36.681584', '-6.13797', 'descripcion', 'horario', 'ofertas', 'musica', 'entrada', 'web', 'facebook', 'twitter', 'telefono', 'email', 'aforo', 'tipo'),
(23, 'local2', 'direccion', 'oxi.png', 'bereber.png', '36.683305', '-6.138679', 'descripcion', 'horario', 'ofertas', 'musica', NULL, 'http://www.google.es', 'http://www.google.es', 'http://www.google.es', 'telefono', 'email', 'aforo', 'tipo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ruta`
--

DROP TABLE IF EXISTS `ruta`;
CREATE TABLE `ruta` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `fecha` datetime NOT NULL,
  `portada` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=23 ;

--
-- Volcado de datos para la tabla `ruta`
--

INSERT INTO `ruta` (`id`, `nombre`, `fecha`, `portada`) VALUES
(22, 'Zona Centro', '2013-10-01 00:00:00', 'tap1.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ruta_local`
--

DROP TABLE IF EXISTS `ruta_local`;
CREATE TABLE `ruta_local` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ruta_id` int(11) NOT NULL,
  `local_id` int(11) NOT NULL,
  `posicion` int(11) NOT NULL,
  `descripcion` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=24 ;

--
-- Volcado de datos para la tabla `ruta_local`
--

INSERT INTO `ruta_local` (`id`, `ruta_id`, `local_id`, `posicion`, `descripcion`) VALUES
(22, 22, 22, 1, 'descripcion'),
(23, 22, 23, 2, 'descripcion');