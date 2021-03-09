import {date} from 'yup/lib/locale';
import http from './httpServices';

export const CheckInService = {
  checkIn: (payload) =>
    http.post(
      'https://erp.ibos.io/hcm/EmployeeRemoteAttendance/CreateEmployeeCheckIn',
      {
        intAccountId: 0,
        intBusinessUnitId: 0,
        intBusinessPartnerId: 0,
        strBusinessPartnerCode: 'string',
        intEmployeeId: 0,
        numAttendanceLatitude: 0,
        numAttendanceLongitude: 0,
        intActionBy: 0,
      },
    ),
  checkOut: (payload) =>
    http.post(
      'https://erp.ibos.io/hcm/EmployeeRemoteAttendance/CreateEmployeeCheckOut',
      {
        intAccountId: 0,
        intBusinessUnitId: 0,
        intBusinessPartnerId: 0,
        strBusinessPartnerCode: 'string',
        intEmployeeId: 0,
        numAttendanceLatitude: 0,
        numAttendanceLongitude: 0,
        intActionBy: 0,
      },
    ),
  getCheckInData: (payload) =>
    http.get(
      `https://erp.ibos.io/hcm/EmployeeRemoteAttendance/GetEmployeeCheckInCheckOutTime?EmployeeId=${payload.empId}&date=${Date.now}`,
    ),
};
