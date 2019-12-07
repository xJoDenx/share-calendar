class AddNullToEvents < ActiveRecord::Migration[5.2]
  def change
    change_column_null :events, :title, false
    change_column_null :events, :description, false
  end
end
