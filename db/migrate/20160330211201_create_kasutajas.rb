class CreateKasutajas < ActiveRecord::Migration
  def change
    create_table :kasutajas do |t|

      t.timestamps null: false
    end
  end
end
