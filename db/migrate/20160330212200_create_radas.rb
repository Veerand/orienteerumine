class CreateRadas < ActiveRecord::Migration
  def change
    create_table :radas do |t|

      t.timestamps null: false
    end
  end
end
