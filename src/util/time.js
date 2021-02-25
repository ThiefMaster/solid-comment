const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

export default class Time {
  static format (format, time) {
    const month = this.shortMonthName(monthNames[time.getMonth()])
    const date = time.getDate()
    switch (format) {
      case 'M d':
        return `${month} ${date}`
      default:
        return time
    }
  }

  static shortMonthName (month) {
    return month[0] + month[1] + month[2]
  }

  // Converts time object to ISO 8601 without any symbols
  // eg. 20210225T144227463Z
  static toIsoStripped (dateObject) {
    return dateObject.toISOString().replaceAll('-', '').replaceAll(':', '').replaceAll('.', '')
  }
}
