class AddNullToCasts < ActiveRecord::Migration[5.2]
  def change
    change_column_null :casts, :name, false
  end
end
