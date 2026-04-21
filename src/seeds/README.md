# Sample Data Files

This directory contains sample seed data for Prescripto:

## Files

- **doctors.json** - 5 sample doctors with different specialties
- **users.json** - 5 sample users/patients
- **appointments.json** - 4 sample appointments

## How to Import

Run the seed script to populate your MongoDB database:

```bash
npm run seed
```

## Credentials for Testing

### Sample Doctors:
- Email: `drjames@gmail.com` | Password: `Doctor@123`
- Email: `drlarson@gmail.com` | Password: `Doctor@123`
- Email: `drpatel@gmail.com` | Password: `Doctor@123`
- Email: `drlee@gmail.com` | Password: `Doctor@123`
- Email: `drlopez@gmail.com` | Password: `Doctor@123`

### Sample Users:
- Email: `john@gmail.com` | Password: `User@1234`
- Email: `jane@gmail.com` | Password: `User@1234`
- Email: `robert@gmail.com` | Password: `User@1234`
- Email: `michael@gmail.com` | Password: `User@1234`
- Email: `sophia@gmail.com` | Password: `User@1234`

## Data Structure

### Doctors
- Full name, email, password (hashed on save)
- Speciality, degree, experience, fees
- Profile image URL, availability status
- Address information

### Users
- Full name, email, password (hashed on save)
- Phone, gender, date of birth
- Address information

### Appointments
- Slot date and time
- Amount, payment status
- Doctor and user associations
- Cancellation and completion status
