class CreateSchedules < ActiveRecord::Migration[5.2]
  def change
    create_table :schedules do |t|
      t.datetime :start_date
      t.datetime :end_date
      t.references :event, foreign_key: true
      t.timestamps
    end
  end
end
