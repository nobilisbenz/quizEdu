import 'package:quizedu/about/about.dart';
import 'package:quizedu/profile/profile.dart';
import 'package:quizedu/login/login.dart';
import 'package:quizedu/topics/topics.dart';
import 'package:quizedu/home/home.dart';

var appRoutes = {
  '/': (context) => const HomeScreen(),
  '/login': (context) => const LoginScreen(),
  '/topics': (context) => const TopicsScreen(),
  '/profile': (context) => const ProfileScreen(),
  '/about': (context) => const AboutScreen(),
};
