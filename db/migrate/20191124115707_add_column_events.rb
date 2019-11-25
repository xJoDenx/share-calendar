class AddColumnEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :price, :integer, null: true
    add_column :events, :place, :string, null: true
    add_column :events, :venue, :string, null: true
    add_column :events, :remarks, :text, null: true
    add_column :events, :site_url, :string, null: true
    remove_column :events, :start_date
    remove_column :events, :end_date

  end
end
