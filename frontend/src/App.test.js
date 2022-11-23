import { render, screen } from '@testing-library/react';
import Navbar from './components/NavBar'
import UpdateProfile from './components/updateProfile'
import Announcements from './components/announcements'
import Profile from './components/profileDisplay'

test('Test01', () => {
  render(<Navbar />);
  const linkElement = screen.getByTestId('navbartest');
  expect(linkElement).toHaveTextContent(/HSM/);
});

test('Test02', () => {
  render(<Announcements />);
  const linkElement = screen.getByTestId('testannouncements');
  expect(linkElement).toBeInTheDocument();
});

test('Test03', () => {
  render(<UpdateProfile />);
  const divElement = screen.getByTestId('test03');
  expect(divElement).toBeInTheDocument();
});

test('Test04', () => {
  render(<Navbar />);
  const linkElement = screen.getByRole("link",{name:/Update Profile/});
  expect(linkElement).toBeInTheDocument();
});

test('Test05', () => {
  render(<Navbar />);
  const linkElement = screen.getByTestId("myprofiletest");
  expect(linkElement).toBeInTheDocument();
});

test('Test06', () => {
  render(<Navbar />);
  const linkElement = screen.getByTestId("myprofiletest");
  expect(linkElement).toHaveTextContent(/My Profile/);
});

test('Test07', () => {
  render(<Profile />);
  const linkElement = screen.getByTestId("testprofile");
  expect(linkElement).toBeInTheDocument();
});

test('Test08', () => {
  render(<Navbar />);
  const linkElement = screen.getByTestId("texttest");
  expect(linkElement).toBeInTheDocument();
});

test('Test09', () => {
  render(<Navbar />);
  const linkElement = screen.getByTestId("texttest");
  expect(linkElement).toHaveTextContent(/HSM/);
});

test('Test10', () => {
  render(<Navbar />);
  const linkElement = screen.getByText("Update Profile");
  expect(linkElement).toHaveAttribute('href', "#/updateProfile");
});



