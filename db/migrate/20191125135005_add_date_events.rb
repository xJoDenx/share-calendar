class AddDateEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :start_date, :date, null: true
    add_column :events, :end_date, :date, null: true
  end
end
