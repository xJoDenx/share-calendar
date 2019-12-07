class AddNullToSchedules < ActiveRecord::Migration[5.2]
  def change
    change_column_null :schedules, :start_time, false
    change_column_null :schedules, :end_time, false
  end
end
